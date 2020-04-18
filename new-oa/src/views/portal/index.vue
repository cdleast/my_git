<template>
    <div class="portal">
        <el-container>
            <el-header>
                <HeaderNav></HeaderNav>
            </el-header>
            <el-main>
                <BreadCrumb></BreadCrumb>
                <el-row :gutter="20">
                    <!-- 待办待阅 -->
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

                    <!-- 通知公告 -->
                    <el-col :span="8" class="tongzhigonggao">
                        <div class="grid-content">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span class="card-name">通知公告</span>
                                    <span class="el-icon-more iconfont"></span>
                                </div>
                                <div v-for="(item,index) in tableTongZhi" :key="index" class="item">
                                    <span class="item_left">{{item.NEWS_SUBJECT}}</span>
                                    <span
                                        class="item_right"
                                    >{{item.NEWS_TIME | comverTime('YYYY-MM-DD')}}</span>
                                </div>
                            </el-card>
                        </div>
                    </el-col>

                    <!-- 公司要闻 -->
                    <el-col :span="16" class="gongsiyaowen">
                        <div class="grid-content">
                            <el-tabs v-model="activeName2">
                                <el-tab-pane label="公司要闻" name="GSYW">
                                    <div
                                        v-for="item in tableGongSiTop"
                                        :key="item.NEWS_ID"
                                        class="gsyw_top"
                                    >
                                        <el-image :src="imgUrl"></el-image>
                                        <div class="gsyw_top_right">
                                            <h3>{{item.NEWS_SUBJECT}}</h3>
                                            <v-clamp
                                                class="gsyw_top_right_p"
                                                autoresize
                                                :max-lines="4"
                                            >{{item.NEWS_BODY}}</v-clamp>
                                            <div class="gsyw_top_right_b">
                                                <span
                                                    class="gsyw_top_right_b_company"
                                                >{{item.S_ODEPT__NAME}}</span>
                                                <span
                                                    class="gsyw_top_right_b_time"
                                                >{{item.NEWS_TIME | comverTime('YYYY-MM-DD')}}</span>
                                                <span
                                                    class="el-icon-view gsyw_top_right_b_view"
                                                >&nbsp;{{item.COUNTER}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        v-for="item in tableGongSiBottom"
                                        :key="item.NEWS_ID"
                                        class="gsyw_bottom"
                                    >
                                        <el-card class="box-card card-border-none">
                                            <div class="item">
                                                <span class="item_left">{{item.NEWS_SUBJECT}}</span>
                                                <span>{{item.NEWS_TIME | comverTime('YYYY-MM-DD')}}</span>
                                                <span>{{item.S_ODEPT__NAME}}</span>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="所属公司要闻" name="SSGSYW">
                                    <div
                                        v-for="item in tableSuoShuTop"
                                        :key="item.NEWS_ID"
                                        class="gsyw_top"
                                    >
                                        <el-image :src="imgUrl"></el-image>
                                        <div class="gsyw_top_right">
                                            <h3>{{item.NEWS_SUBJECT}}</h3>
                                            <v-clamp
                                                class="gsyw_top_right_p"
                                                autoresize
                                                :max-lines="4"
                                            >{{item.NEWS_BODY}}</v-clamp>
                                            <div class="gsyw_top_right_b">
                                                <span
                                                    class="gsyw_top_right_b_company"
                                                >{{item.S_ODEPT__NAME}}</span>
                                                <span
                                                    class="gsyw_top_right_b_time"
                                                >{{item.NEWS_TIME | comverTime('YYYY-MM-DD')}}</span>
                                                <span
                                                    class="el-icon-view gsyw_top_right_b_view"
                                                >&nbsp;{{item.COUNTER}}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        v-for="item in tableSuoShuBottom"
                                        :key="item.NEWS_ID"
                                        class="gsyw_bottom"
                                    >
                                        <el-card class="box-card card-border-none">
                                            <div class="item">
                                                <span class="item_left">{{item.NEWS_SUBJECT}}</span>
                                                <span>{{item.NEWS_TIME | comverTime('YYYY-MM-DD')}}</span>
                                                <span>{{item.S_ODEPT__NAME}}</span>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-col>

                    <!-- 常用功能 -->
                    <el-col :span="8" class="changyonggongneng">
                        <div class="grid-content">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span class="card-name">常用功能</span>
                                    <el-tooltip effect="dark" content="常用菜单" placement="bottom">
                                        <span @click="BacKcygnMore" class="el-icon-more iconfont"></span>
                                    </el-tooltip>
                                </div>
                                <el-carousel
                                    class="cygn_carousel"
                                    :autoplay="false"
                                    trigger="click"
                                    indicator-position="outside"
                                    height="256px"
                                >
                                    <el-carousel-item
                                        v-for="(items,index) in tableChangYong"
                                        :key="index"
                                    >
                                        <div
                                            v-for="item in items"
                                            :key="item.MENU_ID"
                                            class="carousel_item"
                                        >
                                            <span></span>
                                            <p>{{item.MENU_NAME}}</p>
                                        </div>
                                    </el-carousel-item>
                                </el-carousel>
                            </el-card>
                            <div v-if="cygnmore" class="style_hover">
                                <div class="style_hover_head">
                                    <span class="style_hover_head_name">常用菜单</span>
                                    <i @click="BacKcygnMoreChild" class="el-icon-edit iconfont"></i>
                                </div>
                                <div class="style_hover_main">
                                    <ul>
                                        <li>
                                            <img src="../../assets/protal/shouwendengji.png" />
                                            <p>收文登记</p>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/yewuqingshi.png" />
                                            <p>业务请示</p>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/fawen.png" />
                                            <p>发文</p>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/yongche.png" />
                                            <p>用车</p>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/itzhichi.png" />
                                            <p>IT支持</p>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/bangongshiyongzhang.png" />
                                            <p>办公室管理印章申请</p>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/wupinlingyong.png" />
                                            <p>物品领用</p>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/fatongzhi.png" />
                                            <p>发通知</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div v-if="cygnmorechild" class="style_hover style_hover_child">
                                <div class="style_hover_head">
                                    <span class="style_hover_head_name">常用菜单</span>
                                    <span class="save">保存</span>
                                    <span class="level">
                                        <span class="level_img"></span>
                                        操作员操作
                                    </span>
                                </div>
                                <div class="style_hover_main">
                                    <ul>
                                        <li>
                                            <img src="../../assets/protal/shouwendengji.png" />
                                            <p>收文登记</p>
                                            <i class="el-icon-remove-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/yewuqingshi.png" />
                                            <p>业务请示</p>
                                            <i class="el-icon-remove-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/fawen.png" />
                                            <p>发文</p>
                                            <i class="el-icon-remove-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/yongche.png" />
                                            <p>用车</p>
                                            <i class="el-icon-remove-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/itzhichi.png" />
                                            <p>IT支持</p>
                                            <i class="el-icon-remove-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/bangongshiyongzhang.png" />
                                            <p>办公室管理印章申请</p>
                                            <i class="el-icon-remove-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/wupinlingyong.png" />
                                            <p>物品领用</p>
                                            <i class="el-icon-remove-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/fatongzhi.png" />
                                            <p>发通知</p>
                                            <i class="el-icon-remove-outline"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div class="style_hover_head">
                                    <span class="style_hover_head_name">系统菜单库</span>
                                </div>
                                <div class="style_hover_main">
                                    <ul>
                                        <li>
                                            <img src="../../assets/protal/shouwendengji.png" />
                                            <p>收文登记</p>
                                            <i class="el-icon-circle-plus-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/yewuqingshi.png" />
                                            <p>业务请示</p>
                                            <i class="el-icon-circle-plus-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/fawen.png" />
                                            <p>发文</p>
                                            <i class="el-icon-circle-plus-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/yongche.png" />
                                            <p>用车</p>
                                            <i class="el-icon-circle-plus-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/itzhichi.png" />
                                            <p>IT支持</p>
                                            <i class="el-icon-circle-plus-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/bangongshiyongzhang.png" />
                                            <p>办公室管理印章申请</p>
                                            <i class="el-icon-circle-plus-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/wupinlingyong.png" />
                                            <p>物品领用</p>
                                            <i class="el-icon-circle-plus-outline"></i>
                                        </li>
                                        <li>
                                            <img src="../../assets/protal/fatongzhi.png" />
                                            <p>发通知</p>
                                            <i class="el-icon-circle-plus-outline"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </el-col>

                    <!-- 个人收藏夹 -->
                    <el-col :span="8" class="gerenshoucangjia">
                        <div class="grid-content">
                            <el-carousel
                                class="grscj_carousel"
                                :autoplay="false"
                                trigger="click"
                                indicator-position="none"
                                height="106px"
                            >
                                <el-carousel-item>
                                    <div class="carousel_item">
                                        <div class="carousel_item_div">
                                            <span></span>
                                        </div>
                                        <p>个人收藏夹</p>
                                    </div>
                                    <div class="carousel_item">
                                        <div class="carousel_item_div">
                                            <span></span>
                                        </div>
                                        <p>个人回收站</p>
                                    </div>
                                    <div class="carousel_item">
                                        <div class="carousel_item_div">
                                            <span></span>
                                        </div>
                                        <p>OA操作视频</p>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item>2</el-carousel-item>
                                <el-carousel-item>3</el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-col>

                    <!-- 个人看板 -->
                    <el-col :span="24" class="gerenkanban">
                        <div class="grid-content">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span class="card-name">个人看板</span>
                                    <span class="el-icon-more iconfont"></span>
                                </div>
                            </el-card>
                        </div>
                    </el-col>

                    <!-- 我的日历 -->
                    <el-col :span="8" class="wdrl_xdt_zt">
                        <div class="grid-content">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span class="card-name">我的日历</span>
                                    <span class="el-icon-more iconfont"></span>
                                </div>
                                <el-calendar v-model="value"></el-calendar>
                            </el-card>
                        </div>
                    </el-col>

                    <!-- 新动态 -->
                    <el-col :span="8" class="wdrl_xdt_zt">
                        <div class="grid-content">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span class="card-name">新动态</span>
                                    <span class="el-icon-more iconfont"></span>
                                </div>
                                <div
                                    v-for="(item,index) in tableXinDongTai"
                                    :key="index"
                                    class="item"
                                >
                                    <span class="item_left">{{item.NEWS_SUBJECT}}</span>
                                    <span
                                        class="item_right"
                                    >{{item.NEWS_TIME | comverTime('YYYY-MM-DD')}}</span>
                                </div>
                            </el-card>
                        </div>
                    </el-col>

                    <!-- 专题活动 -->
                    <el-col :span="8" class="wdrl_xdt_zt">
                        <div class="grid-content">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span class="card-name">专题活动</span>
                                    <span class="el-icon-more iconfont"></span>
                                </div>
                                <el-carousel
                                    class="grscj_carousel"
                                    :autoplay="false"
                                    trigger="click"
                                    indicator-position="none"
                                    height="220px"
                                >
                                    <el-carousel-item>1</el-carousel-item>
                                    <el-carousel-item>2</el-carousel-item>
                                    <el-carousel-item>3</el-carousel-item>
                                </el-carousel>
                            </el-card>
                        </div>
                    </el-col>

                    <!-- 资讯信息 -->
                    <el-col :span="24" class="zxxx_fgzd">
                        <div class="grid-content">
                            <el-tabs v-model="activeName3">
                                <el-tab-pane label="资讯信息" name="ZIXUNXINXI">
                                    <div class="el-tab-pane-div">
                                        <img :src="imgUrl" />
                                        <el-card class="box-card">
                                            <div slot="header" class="clearfix">
                                                <span class="card-name">每周资讯</span>
                                                <span class="el-icon-more iconfont"></span>
                                            </div>
                                            <div
                                                v-for="(item,index) in tableZiXun"
                                                :key="index"
                                                class="item"
                                            >
                                                <span class="item_left">{{item.NEWS_SUBJECT}}</span>
                                                <span
                                                    class="item_right"
                                                >{{item.NEWS_TIME | comverTime('YYYY-MM-DD')}}</span>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div class="el-tab-pane-div">
                                        <img :src="imgUrl" />
                                        <el-card class="box-card">
                                            <div slot="header" class="clearfix">
                                                <span class="card-name">每周财经</span>
                                                <span class="el-icon-more iconfont"></span>
                                            </div>
                                            <div
                                                v-for="(item,index) in tableCaiJing"
                                                :key="index"
                                                class="item"
                                            >
                                                <span class="item_left">{{item.NEWS_SUBJECT}}</span>
                                                <span
                                                    class="item_right"
                                                >{{item.NEWS_TIME | comverTime('YYYY-MM-DD')}}</span>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div class="el-tab-pane-div">
                                        <img :src="imgUrl" />
                                        <el-card class="box-card">
                                            <div slot="header" class="clearfix">
                                                <span class="card-name">经营参考</span>
                                                <span class="el-icon-more iconfont"></span>
                                            </div>
                                            <div
                                                v-for="(item,index) in tableJingYing"
                                                :key="index"
                                                class="item"
                                            >
                                                <span class="item_left">{{item.NEWS_SUBJECT}}</span>
                                                <span
                                                    class="item_right"
                                                >{{item.NEWS_TIME | comverTime('YYYY-MM-DD')}}</span>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-tab-pane>
                                <el-tab-pane label="法规制度" name="FAGUIZHIDU">
                                    <div class="el-tab-pane-div">
                                        <img :src="imgUrl" />
                                        <el-card class="box-card">
                                            <div slot="header" class="clearfix">
                                                <span class="card-name">规章制度</span>
                                                <span class="el-icon-more iconfont"></span>
                                            </div>
                                            <div
                                                v-for="(item,index) in tableGuiZhangZhiDu"
                                                :key="index"
                                                class="item"
                                            >
                                                <span class="item_left">{{item.NEWS_SUBJECT}}</span>
                                                <span
                                                    class="item_right"
                                                >{{item.NEWS_TIME | comverTime('YYYY-MM-DD')}}</span>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div class="el-tab-pane-div">
                                        <img :src="imgUrl" />
                                        <el-card class="box-card">
                                            <div slot="header" class="clearfix">
                                                <span class="card-name">法律法规</span>
                                                <span class="el-icon-more iconfont"></span>
                                            </div>
                                            <div
                                                v-for="(item,index) in tableFaLvFaGui"
                                                :key="index"
                                                class="item"
                                            >
                                                <span class="item_left">{{item.NEWS_SUBJECT}}</span>
                                                <span
                                                    class="item_right"
                                                >{{item.NEWS_TIME | comverTime('YYYY-MM-DD')}}</span>
                                            </div>
                                        </el-card>
                                    </div>
                                    <div class="el-tab-pane-div">
                                        <img :src="imgUrl" />
                                        <el-card class="box-card">
                                            <div slot="header" class="clearfix">
                                                <span class="card-name">企业文化</span>
                                                <span class="el-icon-more iconfont"></span>
                                            </div>
                                            <div
                                                v-for="(item,index) in tableQiYeWenHua"
                                                :key="index"
                                                class="item"
                                            >
                                                <span class="item_left">{{item.NEWS_SUBJECT}}</span>
                                                <span
                                                    class="item_right"
                                                >{{item.NEWS_TIME | comverTime('YYYY-MM-DD')}}</span>
                                            </div>
                                        </el-card>
                                    </div>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </el-col>

                    <!-- 艺术长廊 -->
                    <el-col :span="16" class="yishu_gupiao">
                        <div class="grid-content">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span class="card-name">艺术长廊</span>
                                    <span class="el-icon-more iconfont"></span>
                                </div>
                                <el-carousel
                                    class="yscl_carousel"
                                    :autoplay="false"
                                    trigger="click"
                                    indicator-position="none"
                                    height="120px"
                                >
                                    <el-carousel-item>
                                        <img :src="imgUrl" />
                                        <img :src="imgUrl" />
                                        <img :src="imgUrl" />
                                    </el-carousel-item>
                                    <el-carousel-item>2</el-carousel-item>
                                    <el-carousel-item>3</el-carousel-item>
                                </el-carousel>
                            </el-card>
                        </div>
                    </el-col>

                    <!-- 股票信息 -->
                    <el-col :span="8" class="yishu_gupiao">
                        <div class="grid-content">
                            <el-card class="box-card">
                                <div slot="header" class="clearfix">
                                    <span class="card-name">股票信息</span>
                                    <span class="el-icon-more iconfont"></span>
                                </div>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import portalApi from "@/api/portal"; // 导入调取接口api文档
import VClamp from "vue-clamp"; // 多行文字溢出
export default {
    name: "portal",
    components: {
        VClamp
    },
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
            portalApi.getDaiBan().then(res => {
                this.tableDaiBan = res.data.ORIGIN;
            });
            portalApi.getDaiYue().then(res => {
                this.tableDaiYue = res.data.ORIGIN;
            });
            portalApi.getWeiJie().then(res => {
                this.tableWeiJie = res.data._DATA_;
            });
            portalApi.getWeiTuo().then(res => {
                this.tableWeiTuo = res.data._DATA_;
            });
            portalApi.getTiXing().then(res => {
                this.tableTiXing = res.data._DATA_;
            });
            portalApi.getTongZhiGongGao().then(res => {
                this.tableTongZhi = res.data._DATA_;
            });
            portalApi.getGongSiYaoWen().then(res => {
                const data = res.data._DATA_;
                this.tableGongSiTop = data.slice(0, 1);
                this.tableGongSiBottom = data.slice(1);
            });
            portalApi.getSuoShuGongSiYaoWen().then(res => {
                const data = res.data._DATA_;
                this.tableSuoShuTop = data.slice(0, 1);
                this.tableSuoShuBottom = data.slice(1);
            });
            portalApi.getChangYongGongNeng().then(res => {
                const data = res.data._DATA_;
                // this.group是封装的全局方法，用来切割数组
                this.tableChangYong = this.group(data, 9);
            });
            portalApi.getXinDongTai().then(res => {
                this.tableXinDongTai = res.data._DATA_;
            });
            portalApi.getMeiZhouZiXun().then(res => {
                this.tableZiXun = res.data._DATA_;
            });
            portalApi.getMeiZhouCaiJig().then(res => {
                this.tableCaiJing = res.data._DATA_;
            });
            portalApi.getJingYingCanKao().then(res => {
                this.tableJingYing = res.data._DATA_;
            });
            portalApi.getGuiZhangZhiDu().then(res => {
                this.tableGuiZhangZhiDu = res.data._DATA_;
            });
            portalApi.getFaLvFaGui().then(res => {
                this.tableFaLvFaGui = res.data._DATA_;
            });
            portalApi.getQiYeWenHua().then(res => {
                this.tableQiYeWenHua = res.data._DATA_;
            });
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
        },

        // 常用功能-更多功能
        BacKcygnMore() {
            this.cygnmore = !this.cygnmore;
            this.cygnmorechild = false;
        },

        // 系统菜单库
        BacKcygnMoreChild() {
            this.cygnmorechild = !this.cygnmorechild;
        }
    }
};
</script>

<style lang='scss' scoped>
.el-main {
    width: 1200px;
    margin: 0 auto;
}

.el-col {
    border-radius: 4px;
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
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

.gongsiyaowen {
    height: 472px;
}

.changyonggongneng {
    height: 346px;
}

.gerenshoucangjia {
    height: 106px;
}

// 资讯信息
.zxxx_fgzd {
    height: 451px;
}

// 个人看板
.gerenkanban {
    height: 325px;
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

// 通知公告
.tongzhigonggao .item_left {
    width: 200px;
}

// 公司要闻
.gsyw_top {
    height: 159px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ededed;
}

.gsyw_top .el-image {
    width: 282px;
    height: 100%;
    float: left;
}

.gsyw_top_right {
    width: 448px;
    height: 159px;
    float: right;
}

.gsyw_top_right h3 {
    font-size: 20px;
    color: #191c3d;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.gsyw_top_right_p {
    font-size: 12px;
    color: #454a5b;
    letter-spacing: 0;
    text-align: justify;
    line-height: 22px;
    margin: 15px 0;
    cursor: pointer;
}

.gsyw_top_right_p:hover {
    color: #409eff;
}

.gsyw_top_right_b {
    height: 20px;
    line-height: 20px;
}

.gsyw_top_right_b>span {
    font-size: 12px;
    color: #8c8d9e;
    float: left;
}

.gsyw_top_right_b .gsyw_top_right_b_time {
    margin-left: 15px;
}

.gsyw_top_right_b .gsyw_top_right_b_view {
    float: right;
    margin-top: 4px;
}

.gsyw_top_right_b>span:hover {
    color: #409eff;
}

.gsyw .item_left {
    width: 452px;
}

// 常用功能
.cygn_carousel {
    margin-top: 20px;
}

.cygn_carousel /deep/ .el-carousel__item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
}

.cygn_carousel .carousel_item {
    width: 105px;
    height: 80px;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
}

.cygn_carousel .carousel_item span {
    width: 29px;
    height: 26px;
    display: inline-block;
    margin: 15px 0 10px 0;
}

.cygn_carousel .carousel_item p {
    font-size: 12px;
    color: #ffffff;
}

.cygn_carousel .carousel_item:nth-child(1) span {
    background: url("../../assets/protal/xietongbangong.png") no-repeat;
}

.cygn_carousel .carousel_item:nth-child(2) span {
    background: url("../../assets/protal/renliziyuan.png") no-repeat;
}

.cygn_carousel .carousel_item:nth-child(3) span {
    background: url("../../assets/protal/caiwuguanli.png") no-repeat;
}

.cygn_carousel .carousel_item:nth-child(4) span {
    background: url("../../assets/protal/dianshangpingtai.png") no-repeat;
}

.cygn_carousel .carousel_item:nth-child(5) span {
    background: url("../../assets/protal/menhuxitong.png") no-repeat;
}

.cygn_carousel .carousel_item:nth-child(6) span {
    background: url("../../assets/protal/gongchengguanli.png") no-repeat;
}

.cygn_carousel .carousel_item:nth-child(7) span {
    background: url("../../assets/protal/dongbanxitong.png") no-repeat;
}

.cygn_carousel .carousel_item:nth-child(8) span {
    background: url("../../assets/protal/touziguanli.png") no-repeat;
}

.cygn_carousel .carousel_item:nth-child(9) span {
    background: url("../../assets/protal/zhishiguanli.png") no-repeat;
}

.cygn_carousel .carousel_item:nth-child(1) {
    background-image: linear-gradient(-45deg, #86bcff 0%, #4d89fe 100%);
}

.cygn_carousel .carousel_item:nth-child(2) {
    background-image: linear-gradient(-45deg, #fda9a9 0%, #e04575 100%);
}

.cygn_carousel .carousel_item:nth-child(3) {
    background-image: linear-gradient(-45deg, #ccb7ff 0%, #745cfc 100%);
}

.cygn_carousel .carousel_item:nth-child(4) {
    background-image: linear-gradient(-45deg, #63d7f9 0%, #208ce7 100%);
}

.cygn_carousel .carousel_item:nth-child(5) {
    background-image: linear-gradient(-45deg, #63d7f9 0%, #208ce7 100%);
}

.cygn_carousel .carousel_item:nth-child(6) {
    background-image: linear-gradient(-45deg, #9db5ff 0%, #6a6eff 100%);
}

.cygn_carousel .carousel_item:nth-child(7) {
    background-image: linear-gradient(-45deg, #ffc861 0%, #fd7e2f 100%);
}

.cygn_carousel .carousel_item:nth-child(8) {
    background-image: linear-gradient(-45deg, #86bcff 0%, #4d89fe 100%);
}

.cygn_carousel .carousel_item:nth-child(9) {
    background-image: linear-gradient(-45deg, #ccb7ff 0%, #745cfc 100%);
}

// 常用功能hover
.cygn .style_hover {
    width: 372px;
    position: absolute;
    top: 70px;
    left: -370px;
    border: 1px solid #409eff;
    border-radius: 6px;
    z-index: 99;
    background: #fff;
}

.cygn .style_hover_child {
    left: -765px;
}

.style_hover .style_hover_head {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #409eff;
    padding: 0 20px;
    position: relative;
}

.style_hover .style_hover_head .style_hover_head_name {
    font-size: 14px;
    color: #191c3d;
    font-weight: 700;
}

.style_hover .style_hover_head .iconfont {
    float: right;
    margin-top: 10px;
}

.style_hover .style_hover_main ul {
    display: flex;
    flex-wrap: wrap;
}

.style_hover .style_hover_main ul>li {
    flex: 0 0 25%;
    text-align: center;
    padding: 20px 15px;
    box-sizing: border-box;
    position: relative;
}

.style_hover .style_hover_main ul>li>p {
    font-size: 12px;
    color: #454a5b;
    line-height: 14px;
    margin-top: 10px;
}

.style_hover .style_hover_main ul>li>i {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #f56c6c;
}

.style_hover .style_hover_main ul>li>i.el-icon-remove-outline {
    color: #f56c6c;
}

.style_hover .style_hover_main ul>li>i.el-icon-circle-plus-outline {
    color: #409eff;
}

.style_hover_child .style_hover_head .save {
    font-size: 14px;
    color: #2568f2;
    float: right;
    cursor: pointer;
}

.style_hover_child .style_hover_head .level {
    font-size: 14px;
    color: #8c8d9e;
    float: right;
    margin-right: 20px;
}

.style_hover_child .style_hover_head .level .level_img {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: url("../../assets/protal/weixuanzhong.png") no-repeat;
}

// 个人收藏夹
.grscj_carousel /deep/ .el-carousel__item {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.grscj_carousel .carousel_item {
    width: 80px;
    height: 85px;
    cursor: pointer;
}

.grscj_carousel .carousel_item .carousel_item_div {
    width: 60px;
    height: 60px;
    background: #f9fafc;
    border-radius: 50%;
    margin-left: 10px;
    text-align: center;
}

.grscj_carousel .carousel_item .carousel_item_div span {
    display: inline-block;
    width: 27px;
    height: 26px;
    margin-top: 17px;
}

.grscj_carousel .carousel_item p {
    font-size: 12px;
    color: #454a5b;
    text-align: center;
    margin-top: 10px;
}

.grscj_carousel .carousel_item:nth-child(1) .carousel_item_div span {
    background: url("../../assets/protal/shoucangjia.png") no-repeat;
}

.grscj_carousel .carousel_item:nth-child(2) .carousel_item_div span {
    background: url("../../assets/protal/huishouzhan.png") no-repeat;
}

.grscj_carousel .carousel_item:nth-child(3) .carousel_item_div span {
    background: url("../../assets/protal/caozuoshipin.png") no-repeat;
}

// 我的日历-新动态-专题活动
.wdrl_xdt_zt {
    height: 311px;
}

.wdrl_xdt_zt .el-carousel {
    margin-top: 20px;
}

.wdrl_xdt_zt .item_left {
    width: 250px;
}

.wdrl_xdt_zt /deep/ .el-calendar__header {
    padding: 5px 0;
    border-bottom: none;
}

.wdrl_xdt_zt /deep/ .el-calendar .el-calendar__body {
    padding: 0;
}

.wdrl_xdt_zt /deep/ .el-calendar-table thead th {
    padding: 5px;
    font-size: 14px;
    color: #454a5b;
}

.wdrl_xdt_zt /deep/ .el-calendar-table td {
    border: none;
}

.wdrl_xdt_zt /deep/ .el-calendar-table .el-calendar-day {
    height: auto;
    padding: 9px;
    text-align: center;
    font-size: 14px;
}

.wdrl_xdt_zt /deep/ .el-calendar-table td.is-selected {
    background-image: linear-gradient(-45deg, #48caec 1%, #4d89fe 97%);
    box-shadow: 0 4px 5px 0 rgba(75, 166, 246, 0.3);
    color: #fff;
}

.wdrl_xdt_zt /deep/ .el-calendar-table .el-calendar-day:hover {
    background-image: linear-gradient(-45deg, #48caec 1%, #4d89fe 97%);
    box-shadow: 0 4px 5px 0 rgba(75, 166, 246, 0.3);
    color: #fff;
}

// 资讯信息
.zxxx_fgzd .el-tab-pane {
    display: flex;
    justify-content: space-between;
}

.zxxx_fgzd .el-tab-pane .el-tab-pane-div {
    width: 360px;
}

.zxxx_fgzd .el-tab-pane .el-tab-pane-div img {
    width: 100%;
    height: 100px;
}

.zxxx_fgzd /deep/ .el-card__body,
.zxxx_fgzd /deep/ .el-card__header {
    padding: 0;
}

.zxxx_fgzd .item_left {
    width: 250px;
}

.zxxx_fgzd .el-card .iconfont{
    right: 0;
}

// 艺术长廊-股票信息
.yishu_gupiao {
    height: 210px;
}

.yscl_carousel {
    margin-top: 20px;
}

.yscl_carousel /deep/ .el-carousel__item {
    display: flex;
    justify-content: space-between;
}

.yscl_carousel img {
    width: 238px;
    height: 120px;
}
</style>