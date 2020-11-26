<template>
    <div class="merge-header">
        <!-- 导出头部选项 -->
        <div class="export-excel-header">
            <filename-option v-model="filename"></filename-option>
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
            ref="multipleTable"
            v-loading="listLoading"
            :data="list"
            element-loading-text="Loading"
            border
            fit
            highlight-current-row
        >
            <el-table-column align="center" label="Id" width="95">
                <template slot-scope="scope">{{ scope.$index }}</template>
            </el-table-column>
            <el-table-column label="Main Information" align="center">
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
            </el-table-column>
            <el-table-column align="center" label="Date" width="220">
                <template slot-scope="scope">
                    <i class="el-icon-time" />
                    <span>{{ scope.row.timestamp | parseTime }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { format } from 'date-fns' // 时间格式化插件
import filenameOption from '../components/filenameOption' // 导出文件名
export default {
    name: 'merge-header',
    components: {
        filenameOption
    },
    data() {
        return {
            list: [], // 数据列表
            listLoading: false, // 数据列表获取状态
            downloadLoading: false, // 导出按钮状态
            filename: '' // 导出文件名
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
            this.$api.getExportMergeExcel().then(res => {
                this.list = res.data.data.items
                this.listLoading = false
            })
        },

        // 导出 Excel
        handleDownload() {
            this.downloadLoading = true
            import('@/vendor/Export2Excel').then(excel => {
                const multiHeader = [['Id', 'Main Information', '', '', 'Date']]
                const header = ['', 'Title', 'Author', 'Readings', '']
                const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
                const list = this.list
                const data = this.formatJson(filterVal, list)
                const merges = ['A1:A2', 'B1:D1', 'E1:E2']
                excel.export_json_to_excel({
                    filename: this.filename,
                    multiHeader,
                    header,
                    merges,
                    data
                })
                this.downloadLoading = false
            })
        },

        // 转换对应的数据格式
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

<style lang='scss' scoped>
</style>