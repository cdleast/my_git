<template>
    <div class="export-excel">
        <!-- 导出头部选项 -->
        <div class="export-excel-header">
            <filename-option v-model="filename"></filename-option>
            <auto-width-option v-model="autoWidth"></auto-width-option>
            <book-type-option v-model="bookType"></book-type-option>
            <el-button
                :loading="downloadLoading"
                type="primary"
                icon="el-icon-document"
                size="mini"
                @click="handleDownload"
            >导出 Excel</el-button>
        </div>

        <!-- 数据列表 -->
        <el-table
            v-loading="listLoading"
            :data="list"
            element-loading-text="Loading..."
            border
            fit
            highlight-current-row
        >
            <el-table-column align="center" label="Id" width="95">
                <template slot-scope="scope">{{ scope.$index }}</template>
            </el-table-column>
            <el-table-column label="Title">
                <template slot-scope="scope">{{ scope.row.title }}</template>
            </el-table-column>
            <el-table-column label="Author" width="110" align="center">
                <template slot-scope="scope">
                    <el-tag>{{ scope.row.author }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="Readings" width="115" align="center">
                <template slot-scope="scope">{{ scope.row.pageviews }}</template>
            </el-table-column>
            <el-table-column align="center" label="Date" width="220">
                <template slot-scope="scope">
                    <i class="el-icon-time" />
                    <span>{{ scope.row.timestamp | parseTime}}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { format } from 'date-fns' // 时间格式化插件
import filenameOption from '../components/filenameOption' // 导出文件名
import autoWidthOption from '../components/autoWidthOption' // 内容是否自适应宽度
import bookTypeOption from '../components/bookTypeOption' // 导出文件类型
export default {
    name: 'export-excel',
    components: {
        filenameOption,
        autoWidthOption,
        bookTypeOption
    },
    data() {
        return {
            list: [], // 数据列表
            listLoading: false, // 数据列表获取状态
            downloadLoading: false, // 导出按钮状态
            filename: '', // 导出文件名
            autoWidth: true, // 内容是否自适应宽度
            bookType: 'xlsx' // 导出文件类型
        }
    },
    created() {
        this.fetchData()
    },
    filters: {
        // 过滤时间
        parseTime(data) {
            return format(data, 'yyyy-MM-dd')
        }
    },
    methods: {
        // 获取表格数据
        fetchData() {
            this.listLoading = true
            this.$api.getExportExcel().then(res => {
                this.list = res.data.data.items
                this.listLoading = false
            })
        },

        // 导出 Excel
        handleDownload() {
            this.downloadLoading = true
            import('@/vendor/Export2Excel').then(excel => {
                const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
                const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
                const list = this.list
                const data = this.formatJson(filterVal, list)
                excel.export_json_to_excel({
                    header: tHeader,
                    data,
                    filename: this.filename,
                    autoWidth: this.autoWidth,
                    bookType: this.bookType
                })
                this.downloadLoading = false
            })
        },

        // 转换数据格式格式
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => {
                if (j === 'timestamp') {
                    return this.parseTime(v[j])
                } else {
                    return v[j]
                }
            }))
        }
    }
};
</script>