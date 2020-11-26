<template>
    <div class="statistical">
        <el-row :gutter="20">
            <!-- 左侧树形结构 -->
            <el-col :span="5">
                <el-card class="box-card">
                    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                </el-card>
            </el-col>

            <!-- 右侧查询条件与内容 -->
            <el-col :span="19">
                <!-- 查询条件 -->
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>查询条件</span>
                    </div>
                    <el-form label-width="80px" :inline="true" :model="form" size="mini" class="search-from">
                        <el-row :gutter="20">
                            <el-col :span="8">
                                <el-form-item label="所属系统">
                                    <el-select clearable v-model="form.data1" placeholder="所属系统">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="流程种类">
                                    <el-input clearable v-model="form.data2" placeholder="流程种类"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="文件编号">
                                    <el-input clearable v-model="form.data3" placeholder="文件编号"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="流程标题">
                                    <el-input clearable v-model="form.data4" placeholder="流程标题"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="办理状态">
                                    <el-select clearable v-model="form.data5" placeholder="办理状态">
                                        <el-option label="区域一" value="shanghai"></el-option>
                                        <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="所属机构">
                                    <el-input
                                        @click.stop.native="affiliationVisible = true"
                                        placeholder="所属机构"
                                        v-model="form.data6"
                                        class="el-input-hover"
                                    >
                                        <i
                                            v-if="form.data6"
                                            @click.stop="clearable('data6')"
                                            slot="suffix"
                                            class="el-input__icon el-icon-circle-close"
                                        ></i>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="拟稿部门">
                                    <el-input
                                        @click.stop.native="departmentVisible = true"
                                        placeholder="所属机构"
                                        v-model="form.data7"
                                        class="el-input-hover"
                                    >
                                        <i
                                            v-if="form.data7"
                                            @click.stop="clearable('data7')"
                                            slot="suffix"
                                            class="el-input__icon el-icon-circle-close"
                                        ></i>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="拟稿人">
                                    <el-input
                                        @click.stop.native="ispersonVisible = true"
                                        placeholder="所属机构"
                                        v-model="form.data8"
                                        class="el-input-hover"
                                    >
                                        <i
                                            v-if="form.data8"
                                            @click.stop="clearable('data8')"
                                            slot="suffix"
                                            class="el-input__icon el-icon-circle-close"
                                        ></i>
                                    </el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="活动时间" class="date-picker">
                                    <el-date-picker
                                        type="date"
                                        placeholder="选择日期"
                                        v-model="form.data9"
                                        style="width: 48%;"
                                    ></el-date-picker>
                                    <span class="line" style="width: 4%;display:inline-block;text-align:center;">-</span>
                                    <el-date-picker
                                        type="date"
                                        placeholder="选择日期"
                                        v-model="form.data10"
                                        style="width: 48%;"
                                    ></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item class="btn">
                            <el-button>清空</el-button>
                            <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>

                <!-- 查询结果 -->
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>查询结果</span>
                        <el-button
                            :loading="downloadLoading"
                            size="mini"
                            type="primary"
                            style="float: right;"
                            icon="el-icon-document"
                            @click="handleDownload"
                        >导出报表</el-button>
                    </div>
                    <el-table :data="tableData" stripe border style="width: 100%">
                        <el-table-column prop="date" label="日期" width="180"></el-table-column>
                        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                        <el-table-column prop="address" label="地址"></el-table-column>
                    </el-table>
                </el-card>
            </el-col>
        </el-row>

        <!-- 条件查询处所属机构对话框 -->
        <affiliation :visible="affiliationVisible" :remoteClose="remoteClose" @option-data="optionData"></affiliation>
        <!-- 条件查询处拟稿部门对话框 -->
        <department :visible="departmentVisible" :remoteClose="remoteClose" @option-data="optionData"></department>
        <!-- 条件查询处拟稿人对话框 -->
        <isperson :visible="ispersonVisible" :remoteClose="remoteClose" @option-data="optionData"></isperson>
    </div>
</template>

<script>
import { format } from 'date-fns' // 时间格式化插件
import affiliation from './components/affiliation'
import department from './components/department'
import isperson from './components/isperson'
export default {
    name: 'zh_portal-statistical',
    components: {
        affiliation,
        department,
        isperson
    },
    data() {
        return {
            data: [
                {
                    label: '一级 1',
                    children: [
                        {
                            label: '二级 1-1',
                            children: [
                                {
                                    label: '三级 1-1-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                },
                {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            form: {
                data6: "",
                data7: "",
                data8: "",
            },
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            affiliationVisible: false, // 条件查询处所属机构对话框
            departmentVisible: false, // 条件查询处拟稿部门对话框
            ispersonVisible: false, // 条件查询处拟稿人对话框
            downloadLoading: false, // 导出报表Loading
            filename: '表格数据', // 导出文件名
            autoWidth: true, // 单元格是否自动宽度
            bookType: 'xlsx' // 导出文件类型
        }
    },
    created() {

    },
    methods: {
        // 左侧树形控件选择
        handleNodeClick(data) {
            // console.log(data);
        },

        // 弹出窗选择内容返回
        optionData(data, type) {
            switch (type) {
                case 'affiliation':
                    this.form.data6 = data.label
                    break
                case 'department':
                    this.form.data7 = data.label
                    break
                case 'isperson':
                    this.form.data8 = data.label
                    break
            }
        },

        clearable(keyField) {
            this.form[keyField] = ''
        },

        onSubmit() {
            console.log(this.form)
        },

        // 导出报表
        handleDownload() {
            this.downloadLoading = true
            import('@/vendor/Export2Excel').then(excel => {
                // 导出数据头
                const tHeader = ['时间', '名字', '地址']
                // 导出具体的数据要求
                const filterVal = ['date', 'name', 'address']
                // 导出特定数据
                const list = this.tableData
                // 转换数据格式
                const data = this.formatJson(filterVal, list)
                // 时间戳
                const execelDate = format(new Date(), 'yyyy-MM-dd')
                excel.export_json_to_excel({
                    header: tHeader,
                    data,
                    filename: `${this.filename} - ${execelDate}`,
                    autoWidth: this.autoWidth,
                    bookType: this.bookType
                })
                this.downloadLoading = false
            })
        },

        // 格式转换
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => {
                // 判断有时间字段的时候进行时间格式化
                if (j === 'timestamp') {
                    return format(v[j], 'yyyy-MM-dd')
                } else {
                    return v[j]
                }
            }))
        },

        // 子组件会触发此方法关闭子组件
        remoteClose(name) {
            switch (name) {
                case 'affiliation':
                    this.affiliationVisible = false
                    break
                case 'department':
                    this.departmentVisible = false
                    break
                case 'isperson':
                    this.ispersonVisible = false
                    break
            }
        }
    }
};
</script>

<style lang='scss' scoped>
.statistical /deep/ {
    .search-from {
        .el-form-item {
            width: 100%;

            .el-form-item__content {
                width: calc(100% - 80px);

                .el-select,
                .el-input {
                    width: 100%;
                }
            }
        }

        > .el-form-item:last-child {
            margin-bottom: 0;
        }

        .btn {
            text-align: center;
        }
    }

    .el-card {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .el-input-hover {
        .el-input__icon.el-icon-circle-close {
            font-size: 14px;
            cursor: pointer;
            display: none;
        }

        &:hover .el-input__icon.el-icon-circle-close {
            display: block;
        }
    }
}
</style>