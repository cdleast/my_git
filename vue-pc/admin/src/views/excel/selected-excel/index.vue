<template>
    <div class="selected-excel">
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
            element-loading-text="拼命加载中"
            border
            fit
            highlight-current-row
            @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" align="center" />
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
            <el-table-column align="center" label="PDate" width="220">
                <template slot-scope="scope">
                    <i class="el-icon-time" />
                    <span>{{ scope.row.display_time }}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import filenameOption from '../components/filenameOption' // 导出文件名
export default {
    name: 'selected-excel',
    components: {
        filenameOption
    },
    data() {
        return {
            list: [],  // 数据列表
            listLoading: true, // 数据列表获取状态
            multipleSelection: [], // 勾选中的数组
            downloadLoading: false, // 导出按钮状态
            filename: '' // 导出文件名
        }
    },
    created() {
        this.fetchData()
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

        // 当选择项发生变化时会触发该事件
        handleSelectionChange(val) {
            this.multipleSelection = val
        },

        // 导出 Excel
        handleDownload() {
            // 先判断是否已经有选中的值
            if (this.multipleSelection.length) {
                this.downloadLoading = true
                import('@/vendor/Export2Excel').then(excel => {
                    const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
                    const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
                    const list = this.multipleSelection
                    const data = this.formatJson(filterVal, list)
                    excel.export_json_to_excel({
                        header: tHeader,
                        data,
                        filename: this.filename
                    })
                    this.$refs.multipleTable.clearSelection() // 取消选择
                    this.downloadLoading = false
                })
            } else {
                this.$message({
                    message: '请选择至少一个项目',
                    type: 'warning'
                })
            }
        },

        // 转换数据格式，把对应的数据
        formatJson(filterVal, jsonData) {
            console.log(jsonData)
            return jsonData.map(v => filterVal.map(j => v[j]))
        }
    }
};
</script>

<style lang='scss' scoped>
</style>