<template>
    <div class="portal">
        <el-container>
            <el-header>
                <HeaderNav></HeaderNav>
            </el-header>
            <el-main>
                <BreadCrumb></BreadCrumb>
                <el-row :gutter="20">
                    <el-col :span="16" class="daiban">
                        <div class="grid-content">
                            <el-tabs v-model="activeName1" @tab-click="handleClick">
                                <el-tab-pane label="待办" name="DAIBAN">
                                    <span slot="label" style="position: relative">
                                        <span>待办</span>
                                        <el-badge
                                            v-show="tableDaiBan.length>0"
                                            class="items_badge"
                                            :value="tableDaiBan.length"
                                            size="mini"
                                            :max="99"
                                        ></el-badge>
                                    </span>
                                    <el-table
                                        ref="multipleTable"
                                        :data="tableDaiBan"
                                        tooltip-effect="dark"
                                        style="width: 100%"
                                        height="320"
                                        @selection-change="handleSelectionChange"
                                    >
                                        <el-table-column type="selection" width="45"></el-table-column>
                                        <el-table-column
                                            prop="TODO_TITLE"
                                            width="190"
                                            label="标题"
                                            show-overflow-tooltip
                                        ></el-table-column>
                                        <el-table-column
                                            prop="S_ODEPT__NAME"
                                            show-overflow-tooltip
                                            label="所属机构"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="SEND_USER_CODE__NAME"
                                            show-overflow-tooltip
                                            label="发送者"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="SEND_DEPT_NAME"
                                            show-overflow-tooltip
                                            label="所在部门"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="TODO_CODE_NAME"
                                            label="代办类型"
                                            show-overflow-tooltip
                                        ></el-table-column>
                                        <el-table-column label="时间" show-overflow-tooltip>
                                            <template
                                                slot-scope="scope"
                                            >{{ scope.row.TODO_SEND_TIME | comverTime('YYYY-MM-DD') }}</template>
                                        </el-table-column>
                                        <el-table-column label="操作">
                                            <template slot-scope="scope">
                                                <el-button
                                                    type="text"
                                                    size="mini"
                                                    @click="handleYes(scope.$index, scope.row)"
                                                >同意</el-button>
                                                <el-button
                                                    type="text"
                                                    class="handleNo"
                                                    size="mini"
                                                    @click="handleNo(scope.$index, scope.row)"
                                                >拒绝</el-button>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </el-tab-pane>
                                <el-tab-pane label="待阅" name="DAIYUE">
                                    <span slot="label" style="position: relative">
                                        <span>待阅</span>
                                        <el-badge
                                            v-show="tableDaiYue.length>0"
                                            class="items_badge"
                                            :value="tableDaiYue.length"
                                            size="mini"
                                            :max="99"
                                        ></el-badge>
                                    </span>
                                    <el-table
                                        :data="tableDaiYue"
                                        tooltip-effect="dark"
                                        style="width: 100%"
                                        height="320"
                                    >
                                        <el-table-column
                                            prop="TODO_TITLE"
                                            width="190"
                                            label="标题"
                                            show-overflow-tooltip
                                        ></el-table-column>
                                        <el-table-column
                                            prop="SEND_USER_CODE__NAME"
                                            show-overflow-tooltip
                                            label="发送者"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="SEND_DEPT_NAME"
                                            show-overflow-tooltip
                                            label="所在部门"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="TODO_CODE_NAME"
                                            label="代办类型"
                                            show-overflow-tooltip
                                        ></el-table-column>
                                        <el-table-column label="时间" show-overflow-tooltip>
                                            <template
                                                slot-scope="scope"
                                            >{{ scope.row.TODO_SEND_TIME | comverTime('YYYY-MM-DD') }}</template>
                                        </el-table-column>
                                    </el-table>
                                </el-tab-pane>
                                <el-tab-pane label="未结" name="WEIJIE">
                                    <span slot="label" style="position: relative">
                                        <span>未结</span>
                                        <el-badge
                                            v-show="tableWeiJie.length>0"
                                            class="items_badge"
                                            :value="tableWeiJie.length"
                                            size="mini"
                                            :max="99"
                                        ></el-badge>
                                    </span>
                                    <el-table
                                        :data="tableWeiJie"
                                        tooltip-effect="dark"
                                        style="width: 100%"
                                        height="320"
                                    >
                                        <el-table-column
                                            prop="TITLE"
                                            width="190"
                                            label="标题"
                                            show-overflow-tooltip
                                        ></el-table-column>
                                        <el-table-column
                                            prop="S_USER__NAME"
                                            show-overflow-tooltip
                                            label="拟稿人"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="S_TDEPT__NAME"
                                            show-overflow-tooltip
                                            label="拟稿部门"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="SERV_NAME"
                                            label="单据类型"
                                            show-overflow-tooltip
                                        ></el-table-column>
                                        <el-table-column label="时间" show-overflow-tooltip>
                                            <template
                                                slot-scope="scope"
                                            >{{ scope.row.S_ATIME | comverTime('YYYY-MM-DD') }}</template>
                                        </el-table-column>
                                    </el-table>
                                </el-tab-pane>
                                <el-tab-pane label="委托" name="WEITUO">
                                    <span slot="label" style="position: relative">
                                        <span>委托</span>
                                        <el-badge
                                            v-show="tableWeiTuo.length>0"
                                            class="items_badge"
                                            :value="tableWeiTuo.length"
                                            size="mini"
                                            :max="99"
                                        ></el-badge>
                                    </span>
                                    <el-table
                                        :data="tableWeiTuo"
                                        tooltip-effect="dark"
                                        style="width: 100%"
                                        height="320"
                                    >
                                        <el-table-column
                                            prop="TODO_TITLE"
                                            width="190"
                                            label="标题"
                                            show-overflow-tooltip
                                        ></el-table-column>
                                        <el-table-column
                                            prop="SEND_USER_CODE__NAME"
                                            show-overflow-tooltip
                                            label="发送者"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="SEND_DEPT_NAME"
                                            show-overflow-tooltip
                                            label="所在部门"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="TODO_CODE_NAME"
                                            label="代办类型"
                                            show-overflow-tooltip
                                        ></el-table-column>
                                        <el-table-column label="时间" show-overflow-tooltip>
                                            <template
                                                slot-scope="scope"
                                            >{{ scope.row.TODO_SEND_TIME | comverTime('YYYY-MM-DD') }}</template>
                                        </el-table-column>
                                    </el-table>
                                </el-tab-pane>
                                <el-tab-pane label="提醒" name="TIXING">
                                    <span slot="label" style="position: relative">
                                        <span>提醒</span>
                                        <el-badge
                                            v-show="tableTiXing.length>0"
                                            class="items_badge"
                                            :value="tableTiXing.length"
                                            size="mini"
                                            :max="99"
                                        ></el-badge>
                                    </span>
                                    <el-table
                                        :data="tableTiXing"
                                        tooltip-effect="dark"
                                        style="width: 100%"
                                        height="320"
                                    >
                                        <el-table-column
                                            prop="DATA_TITLE"
                                            width="190"
                                            label="标题"
                                            show-overflow-tooltip
                                        ></el-table-column>
                                        <el-table-column
                                            prop="SEND_USER__NAME"
                                            show-overflow-tooltip
                                            label="发送者"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="S_DEPT__NAME"
                                            show-overflow-tooltip
                                            label="所在部门"
                                        ></el-table-column>
                                        <el-table-column
                                            prop="SERV_NAME"
                                            label="单据类型"
                                            show-overflow-tooltip
                                        ></el-table-column>
                                        <el-table-column label="时间" show-overflow-tooltip>
                                            <template
                                                slot-scope="scope"
                                            >{{ scope.row.SEND_TIME | comverTime('YYYY-MM-DD') }}</template>
                                        </el-table-column>
                                    </el-table>
                                </el-tab-pane>
                            </el-tabs>
                            <div class="el-tabs-right">
                                <el-button type="text">
                                    切换排序
                                    <span class="el-icon-d-caret"></span>
                                </el-button>
                                <span class="el-icon-refresh iconfont"></span>
                            </div>
                            <div v-show="isFooter" class="el-tabs-footer">
                                <el-button
                                    @click="toggleSelect(tableDaiBan)"
                                    class="allButton"
                                    type="text"
                                >全选/反选</el-button>
                                <el-button
                                    @click="allRefused"
                                    class="refused"
                                    type="danger"
                                    round
                                    size="mini"
                                >拒绝</el-button>
                                <el-button
                                    @click="allAgreed"
                                    size="mini"
                                    class="agreed"
                                    type="success"
                                    round
                                >同意</el-button>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="8" class="tongzhigonggao">
                        <div class="grid-content">2</div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import portalApi from "@/api/portal"; // 导入调取接口api文档
export default {
    name: "portal",
    data() {
        return {
            activeName1: "DAIBAN",
            activeName2: "GSYW",
            activeName3: "ZIXUNXINXI",
            tableDaiBan: [], // 待办
            tableDaiYue: [], // 待阅
            tableWeiJie: [], // 未结
            tableWeiTuo: [], // 委托
            tableTiXing: [], // 提醒
            multipleSelection: [], // 选中表格数组
            isFooter: true, // 待办待阅底部操作
            tableTongZhi: [], // 通知公告
            allSelect: false, // 列表全选与否
            tableGongSiTop: [], // 公司要闻
            tableGongSiBottom: [], // 公司要闻
            tableSuoShuTop: [], // 所属公司要闻
            tableSuoShuBottom: [], // 所属公司要闻
            tableChangYong: [], // 常用功能
            imgUrl:
                "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
            cygnmore: false, // 常用二级菜单
            cygnmorechild: false, // 常用三级菜单
            tableXinDongTai: [], // 新动态
            tableZiXun: [], // 每周资讯
            tableCaiJing: [], // 每周财经
            tableJingYing: [], // 经营参考
            tableFaLvFaGui: [], // 法律法规
            tableGuiZhangZhiDu: [], // 规章制度
            tableQiYeWenHua: [], // 企业文化
            value: new Date() // 我的日历
        };
    },
    created() {
        this.getList(); // 获取数据
    },
    methods: {
        // 获取数据
        getList() {
            portalApi
                .getDaiBan()
                .then(res => (this.tableDaiBan = res.data.ORIGIN));
            portalApi
                .getDaiYue()
                .then(res => (this.tableDaiYue = res.data.ORIGIN));
            portalApi
                .getWeiJie()
                .then(res => (this.tableWeiJie = res.data._DATA_));
            portalApi
                .getWeiTuo()
                .then(res => (this.tableWeiTuo = res.data._DATA_));
            portalApi
                .getTiXing()
                .then(res => (this.tableTiXing = res.data._DATA_));
        },
        // 选中的表格 val是选中的那行
        handleSelectionChange(val) {
            // 把选中的表格添加进数组
            this.multipleSelection = val;
        },

        // 全选/反选
        // toggleRowSelection 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
        // clearSelection 用于多选表格，清空用户的选择
        toggleSelect(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },

        // 全部同意
        allAgreed() {
            this.allSelect = true;
        },

        // 全部拒绝
        allRefused() {
            this.allSelect = false;
        },

        // 单个同意
        handleYes(index, row) {
            console.log(index, row);
        },

        // 单个拒绝
        handleNo(index, row) {
            console.log(index, row);
        },

        // 选项卡切换
        handleClick(tab, event) {
            if (tab.label !== "待办") {
                this.isFooter = false;
            } else {
                this.isFooter = true;
            }
        }
    }
};
</script>

<style lang='scss' scoped>
.el-main {
    width: 1190px;
    margin: 0 auto;
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    background: #ffffff;
    border: 1px solid #ededed;
    border-radius: 4px;
    position: relative;
    height: 100%;
}

.grid-content:hover {
    box-shadow: 0 5px 20px 6px rgba(0, 28, 144, 0.07);
}

// 内容高度设置
.daiban,
.tongzhigonggao {
    height: 432px;
}

// 选项卡头部右侧按钮
.el-tabs-right {
    position: absolute;
    right: 20px;
    top: 0;
    height: 48px;
    line-height: 48px;
}

.el-tabs-right .el-button {
    font-size: 14px;
    color: #8c8d9e;
    margin-right: 7px;
}

.el-tabs-right .iconfont {
    cursor: pointer;
    color: #8c8d9e;
    vertical-align: middle;
    font-size: 16px;
}

// 标题上标记样式
.items_badge {
    position: absolute;
    right: -30px;
    top: -10px;
    width: 35px;
    height: 20px;
    line-height: 20px;
}

// 切换排序hover
.el-tabs-right .el-button:hover,
.el-tabs-right .el-button:hover span,
.el-tabs-right span:hover {
    color: #409eff;
}

.handleNo {
    color: #f56c6c;
}

// 选项卡底部内容
.el-tabs-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    background: #fff;
    z-index: 9;
}

.el-tabs-footer .allButton {
    float: left;
}

.el-tabs-footer .agreed,
.el-tabs-footer .refused {
    float: right;
    margin-top: 6px;
}
</style>