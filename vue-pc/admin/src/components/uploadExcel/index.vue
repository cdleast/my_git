<template>
    <div>
        <input
            ref="excel-upload-input"
            class="excel-upload-input"
            type="file"
            accept=".xlsx, .xls"
            @change="handleClick"
        />
        <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
            拖入 Excel 文件
            <el-button
                :loading="loading"
                style="margin-left:16px;"
                size="mini"
                type="primary"
                @click="handleUpload"
            >点击上传</el-button>
        </div>
    </div>
</template>

<script>
import XLSX from 'xlsx' // 各种电子表格格式的解析器和编写器
export default {
    props: {
        beforeUpload: Function, // eslint-disable-line
        onSuccess: Function// eslint-disable-line
    },
    data() {
        return {
            loading: false,
            excelData: {
                header: null,
                results: null
            }
        }
    },
    methods: {
        generateData({ header, results }) {
            this.excelData.header = header
            this.excelData.results = results
            this.onSuccess && this.onSuccess(this.excelData)
        },
        handleDrop(e) {
            e.stopPropagation()
            e.preventDefault()
            if (this.loading) return
            const files = e.dataTransfer.files
            if (files.length !== 1) {
                this.$message.error('Only support uploading one file!')
                return
            }
            const rawFile = files[0] // 只使用文件[0]

            if (!this.isExcel(rawFile)) {
                this.$message.error('Only supports upload .xlsx, .xls, .csv suffix files')
                return false
            }
            this.upload(rawFile)
            e.stopPropagation()
            e.preventDefault()
        },
        handleDragover(e) {
            e.stopPropagation()
            e.preventDefault()
            e.dataTransfer.dropEffect = 'copy'
        },
        handleUpload() {
            this.$refs['excel-upload-input'].click()
        },
        handleClick(e) {
            const files = e.target.files
            const rawFile = files[0] // 只使用文件[0]
            if (!rawFile) return
            this.upload(rawFile)
        },
        upload(rawFile) {
            this.$refs['excel-upload-input'].value = null // 修正不能选择相同的excel

            if (!this.beforeUpload) {
                this.readerData(rawFile)
                return
            }
            const before = this.beforeUpload(rawFile)
            if (before) {
                this.readerData(rawFile)
            }
        },
        readerData(rawFile) {
            this.loading = true
            return new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onload = e => {
                    const data = e.target.result
                    const workbook = XLSX.read(data, { type: 'array' })
                    const firstSheetName = workbook.SheetNames[0]
                    const worksheet = workbook.Sheets[firstSheetName]
                    const header = this.getHeaderRow(worksheet)
                    const results = XLSX.utils.sheet_to_json(worksheet)
                    this.generateData({ header, results })
                    this.loading = false
                    resolve()
                }
                reader.readAsArrayBuffer(rawFile)
            })
        },
        getHeaderRow(sheet) {
            const headers = []
            const range = XLSX.utils.decode_range(sheet['!ref'])
            let C
            const R = range.s.r
            /* 从第一排开始 */
            for (C = range.s.c; C <= range.e.c; ++C) { /* 遍历范围中的每一列 */
                const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
                /* 查找第一行中的单元格 */
                let hdr = 'UNKNOWN ' + C // <-- 使用所需的默认值替换
                if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
                headers.push(hdr)
            }
            return headers
        },
        isExcel(file) {
            return /\.(xlsx|xls|csv)$/.test(file.name)
        }
    }
}
</script>

<style scoped>
.excel-upload-input {
    display: none;
    z-index: -9999;
}
.drop {
    border: 2px dashed #bbb;
    width: 600px;
    height: 160px;
    line-height: 160px;
    margin: 0 auto;
    font-size: 24px;
    border-radius: 5px;
    text-align: center;
    color: #bbb;
    position: relative;
}
</style>
