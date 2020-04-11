<template>
    <div class="daibanshiwu">
        <BreadCrumb></BreadCrumb>

        <div class="main_div_border">
            <div class="main_div_search">
                <el-row :gutter="20">
                    <el-col :span="10">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="标题">
                                <el-input placeholder="请输入" v-model="form.title"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :span="10">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="文件编码">
                                <el-input placeholder="请输入" v-model="form.coding"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :span="4" class="main_div_search_btn">
                        <el-button
                            @click="isMore"
                            size="small"
                            type="primary"
                            :icon="isShow?'el-icon-arrow-up':'el-icon-arrow-down'"
                        >更多</el-button>
                        <el-button
                            @click="getDataList()"
                            size="small"
                            type="primary"
                            icon="el-icon-search"
                        >查询</el-button>
                    </el-col>
                    <div v-show="isShow">
                        <el-col :span="10">
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="发送人">
                                    <el-input placeholder="请输入" v-model="form.sender"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="10">
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="分类">
                                    <el-input placeholder="请输入" v-model="form.option"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="10">
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="发送时间">
                                    <el-date-picker
                                        v-model="form.timer"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        value-format="yyyy-MM-dd"
                                    ></el-date-picker>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </div>
                </el-row>
            </div>

            <el-table
                :data="tableData.slice((currentPage-1) * pageSize, currentPage * pageSize)"
                style="width: 100%"
            >
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="TODO_TITLE" label="标题" show-overflow-tooltip></el-table-column>
                <el-table-column prop="SEND_DEPT_NAME" label="拟稿单位" show-overflow-tooltip></el-table-column>
                <el-table-column prop="SEND_DEPT_NAME" label="上一环节" show-overflow-tooltip></el-table-column>
                <el-table-column prop="SEND_USER_CODE__NAME" label="发送人" show-overflow-tooltip></el-table-column>
                <el-table-column prop="TODO_CODE_NAME" label="分类" show-overflow-tooltip></el-table-column>
                <el-table-column prop="TODO_SEND_TIME" label="发起时间">
                    <template
                        slot-scope="scope"
                    >{{ scope.row.TODO_SEND_TIME | comverTime('YYYY-MM-DD') }}</template>
                </el-table-column>
                <el-table-column label="流程状态">
                    <template slot-scope="scope">
                        <span v-if="scope.row.OPEN == 1">已结</span>
                        <span v-if="scope.row.OPEN == 2">未结</span>
                    </template>
                </el-table-column>
                <el-table-column prop="SEND_USER_NAME" label="当前处理人"></el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 50]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
import BreadCrumb from "@/components/proces/breadcrumb";
export default {
    name: "daibanshiwu",
    components: {
        BreadCrumb
    },
    data() {
        return {
            tableData: [], // 数据数组
            form: {
                title: "", // 标题
                coding: "", // 文件编码
                sender: "", // 发送人
                option: "", // 分类
                timer: "" // 发送时间
            },
            isShow: false, // 更多选项
            value: "", // 日期
            search: "", // 查询
            total: 0, // 总记录数
            currentPage: 1, // 当前页码
            pageSize: 10 // 每页显示10条数据
        };
    },
    created() {
        this.getDataList();
    },
    methods: {
        // 获取数据，查询操作用一个
        getDataList() {
            this.$axios.get("/api/daibanshiwu").then(res => {
                this.tableData = res.data.ORIGIN;
                this.tableData = this.tableData.filter(data => {
                    let matchTitle = true; // 标题
                    // let matchCoding = true; // 文件编码
                    let matchSender = true; // 发送人
                    let matchOption = true; // 分类
                    let matchTimer = true; // 发送时间
                    if (this.form.title) {
                        // 这个是模糊查询，属于对应内容的任何一部分都会查询
                        matchTitle = data.TODO_TITLE.match(this.form.title);
                    }
                    if (this.form.coding) {
                        // 精准查询，必须全对
                        matchCoding = data.coding == this.form.coding;
                    }
                    if (this.form.sender) {
                        matchSender =
                            data.SEND_USER_CODE__NAME == this.form.sender;
                    }
                    if (this.form.option) {
                        matchOption = data.TODO_CODE_NAME == this.form.option;
                    }
                    if (this.form.timer) {
                        let startTimer = this.form.timer[0];
                        let endtTimer = this.form.timer[1];
                        matchTimer =
                            data.TODO_SEND_TIME > startTimer &&
                            data.TODO_SEND_TIME < endtTimer;
                    }
                    return (
                        matchTitle && matchSender && matchOption && matchTimer
                    );
                });
                this.total = this.tableData.length;
            });
        },
        // 更多选项切换
        isMore() {
            this.isShow = !this.isShow;
        },
        // 每页显示多少条
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            this.pageSize = val;
            this.getDataList();
        },
        // 当前页点击跳转
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.currentPage = val;
            this.getDataList();
        }
    }
};
</script>

<style lang='scss' scoped>
.el-range-editor.el-input__inner {
    width: 100%;
}
</style>