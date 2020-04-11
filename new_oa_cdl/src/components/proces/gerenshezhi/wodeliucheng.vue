<template>
    <div class="wodeliucheng">
        <BreadCrumb></BreadCrumb>

        <div class="main_div_border">
            <div class="my_proces_main_top">
                <div class="my_proces_main_flex">
                    <div class="left">
                        <h3>我的申请</h3>
                        <p>3</p>
                    </div>
                    <div class="right"></div>
                </div>
                <div class="my_proces_main_flex">
                    <div class="left">
                        <h3>我的办理</h3>
                        <p>3</p>
                    </div>
                    <div class="right"></div>
                </div>
                <div class="my_proces_main_flex">
                    <div class="left">
                        <h3>我的阅知</h3>
                        <p>3</p>
                    </div>
                    <div class="right"></div>
                </div>
                <div class="my_proces_main_flex">
                    <div class="left">
                        <h3>我的委托</h3>
                        <p>3</p>
                    </div>
                    <div class="right"></div>
                </div>
                <div class="my_proces_main_flex">
                    <div class="left">
                        <h3>我的提醒</h3>
                        <p>3</p>
                    </div>
                    <div class="right"></div>
                </div>
            </div>
            <div class="main_div_search clearfix">
                <div class="state">
                    单据状态：
                    <el-tag @click="cur1=0" :type="cur1===0?'dark':''">全部</el-tag>
                    <el-tag @click="cur1=1" :type="cur1===1?'dark':''">未结</el-tag>
                    <el-tag @click="cur1=2" :type="cur1===2?'dark':''">已结</el-tag>
                </div>
                <div class="date">
                    单据日期：
                    <el-tag @click="cur2=0" :type="cur2===0?'dark':''">全部</el-tag>
                    <el-tag @click="cur2=1" :type="cur2===1?'dark':''">一周内</el-tag>
                    <el-tag @click="cur2=2" :type="cur2===2?'dark':''">一月内</el-tag>
                    <el-tag @click="cur2=3" :type="cur2===3?'dark':''">三月内</el-tag>
                    <el-date-picker
                        v-model="value"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    ></el-date-picker>
                </div>
                <div class="search">
                    模糊查询：
                    <el-input class="search_input" v-model="search" placeholder="请输入内容"></el-input>
                    <el-button @click="getDataList()" type="primary">查询</el-button>
                </div>
            </div>

            <el-table
                :data="tableData.slice((currentPage-1) * pageSize, currentPage * pageSize)"
                style="width: 100%"
            >
                <el-table-column type="index" label="序号"></el-table-column>
                <el-table-column prop="TODO_CODE_NAME" label="流程种类"></el-table-column>
                <el-table-column prop="TODO_TITLE" label="标题" show-overflow-tooltip></el-table-column>
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
                <el-table-column prop="TODO_CODE_NAME" label="当前处理人"></el-table-column>
                <el-table-column prop="S_ODEPT__NAME" label="所属机构"></el-table-column>
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
    name: "wodeliucheng",
    components: {
        BreadCrumb
    },
    data() {
        return {
            tableData: [], // 数据数组
            cur1: 0, // 默认单据状态
            cur2: 0, // 默认单据日期
            isOption: false,
            value: "", // 日期
            search: "", // 查询
            total: 0, // 总记录数
            currentPage: 1, // 当前页码
            pageSize: 10 // 每页显示10条数据,
        };
    },
    filters: {
        JudgeState(type) {
            if (type === 1) {
                return (type = "已结");
            } else if (type === 1) {
                return (type = "未结");
            }
        }
    },
    created() {
        this.getDataList();
    },
    methods: {
        getDataList(way) {
            this.$axios.get("/api/my-proces").then(res => {
                this.tableData = res.data.ORIGIN;
                this.total = res.data.ORIGIN.length;
            });
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
// 头部申请提醒部分
.my_proces_main {
    background: #fff;
    padding: 20px;
    border: 1px solid #ededed;
    border-radius: 6px;
}
.my_proces_main_top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.my_proces_main_top > .my_proces_main_flex {
    height: 70px;
    background: #f7faff;
    padding: 15px;
    box-sizing: border-box;
    flex: 0 0 216px;
    border-radius: 6px;
}
.my_proces_main_flex .left {
    float: left;
}
.my_proces_main_flex .left h3 {
    font-size: 12px;
    color: #454a5b;
}
.my_proces_main_flex .left p {
    font-size: 22px;
    color: #454a5b;
    margin-top: 5px;
}
.my_proces_main_flex .right {
    float: right;
    width: 30px;
    height: 30px;
    margin-top: 3px;
}
.my_proces_main_flex:nth-child(1) .right {
    background: url("../../../assets/proces/wodeshenqing.png") no-repeat;
}
.my_proces_main_flex:nth-child(2) .right {
    background: url("../../../assets/proces/wodebanli.png") no-repeat;
}
.my_proces_main_flex:nth-child(3) .right {
    background: url("../../../assets/proces/wodeyuezhi.png") no-repeat;
}
.my_proces_main_flex:nth-child(4) .right {
    background: url("../../../assets/proces/wodeweituo.png") no-repeat;
}
.my_proces_main_flex:nth-child(5) .right {
    background: url("../../../assets/proces/wodetixing.png") no-repeat;
}

// 选项查询部分
.main_div_search {
    height: 32px;
    line-height: 32px;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 2px dotted #ededed;
    display: flex;
}
.main_div_search .date {
    margin: 0 22px;
}
.main_div_search .state,
.main_div_search .date {
    font-size: 14px;
    color: #454a5b;
}
.main_div_search .state .el-tag,
.main_div_search .date .el-tag {
    margin-right: 10px;
    cursor: pointer;
}
.el-range-editor.el-input__inner {
    width: 260px;
}
.main_div_search .search {
    font-size: 14px;
    color: #454a5b;
}
.main_div_search .search .search_input {
    width: 156px;
    margin-right: 20px;
}
</style>