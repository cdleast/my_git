<template>
    <div class="upload-excel">
        <upload-excel-component :on-success="handleSuccess" :before-upload="beforeUpload" />
        <el-table :data="tableData" border highlight-current-row style="width: 100%;margin-top:20px;">
            <el-table-column v-for="item of tableHeader" :key="item" :prop="item" :label="item" />
        </el-table>
    </div>
</template>

<script>
import uploadExcelComponent from '@/components/uploadExcel/index.vue'
export default {
    name: 'upload-excel',
    components: {
        uploadExcelComponent
    },
    data() {
        return {
            tableData: [], // 上传表格数据
            tableHeader: [] // 上传表格数据表头
        }
    },
    methods: {
        // 您可以在上传之前做出一些特殊的判断。例如，如果文件的大小大于1 MB？如果大于1 MB，它将停止解析并提示错误消息。
        beforeUpload(file) {
            const isLt1M = file.size / 1024 / 1024 < 1

            if (isLt1M) {
                return true
            }

            this.$message({
                message: 'Please do not upload files larger than 1m in size.',
                type: 'warning'
            })
            return false
        },

        // onSuccess一个在解析成功时触发的回调函数，它返回表的标题和内容。
        handleSuccess({ results, header }) {
            this.tableData = results
            this.tableHeader = header
        }
    }
};
</script>

<style lang='scss' scoped>
</style>