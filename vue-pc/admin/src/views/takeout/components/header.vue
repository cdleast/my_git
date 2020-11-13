<template>
    <div class="meituan-header" :style="head_pic_url">
        <!-- 顶部通栏 -->
        <div class="header-search">
            <el-button size="mini" type="primary" icon="el-icon-arrow-left"></el-button>
            <el-input size="mini" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="search"></el-input>
            <el-button size="mini" type="primary" icon="el-icon-more"></el-button>
        </div>

        <!-- 主题内容 -->
        <div class="content-wrapper clearfix">
            <el-image style="width: 50px; height: 50px" :src="poiInfo.pic_url" fit="fit"></el-image>
            <div class="name">
                <h3>{{poiInfo.name}}</h3>
            </div>
            <div class="collect">
                <el-image style="width: 20px; height: 20px" :src="star" fit="fit"></el-image>
                <span>收藏</span>
            </div>
        </div>

        <!-- 公告内容 -->
        <div class="bulletin-wrapper clearfix">
            <el-image v-if="poiInfo.discounts2" :src="poiInfo.discounts2[0].icon_url" fit="fit"></el-image>
            <span class="text" v-if="poiInfo.discounts2">{{poiInfo.discounts2[0].info}}</span>
            <div class="detail" v-if="poiInfo.discounts2" @click="showBulletin">
                {{poiInfo.discounts2.length}}个活动
                <i class="el-icon-arrow-right"></i>
            </div>
        </div>

        <!-- 活动弹窗 -->
        <activity :visible="activity.visible" :remoteClose="remoteClose"></activity>
    </div>
</template>

<script>
import activity from './activity'
export default {
    name: 'meituan-header',
    components: {
        activity
    },
    props: {
        poiInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {
            search: '', // 搜索框
            star: require("@/assets/images/meituan/star.png"),
            activity: { // 新增和编辑传递参数
                title: '', // 弹窗标题
                visible: false, // 弹窗状态
                formData: {}
            },
        }
    },
    computed: {
        head_pic_url() {
            return "background-image: url(" + this.poiInfo.head_pic_url + ");"
        },
    },
    methods: {
        // 打开活动
        showBulletin() {
            this.activity.visible = true
        },



        // 子组件会触发此方法关闭子组件
        remoteClose() {
            this.activity.visible = false
        },
    }
};
</script>

<style lang='scss' scoped>
.meituan-header {
    background-size: 100% 100%;
    padding: 10px 0;
    .header-search {
        display: flex;

        .el-input {
            margin: 0 10%;
        }
    }

    .content-wrapper {
        padding: 17px 10px 11px;

        .el-image {
            float: left;
        }

        .name {
            float: left;
            padding: 18px 0 0 12px;

            h3 {
                font-size: 16px;
                font-weight: bold;
                color: white;
            }
        }

        .collect {
            width: 25px;
            height: 37px;
            float: right;
            text-align: center;
            padding-top: 6px;

            span {
                margin-top: 7px;
                color: white;
                font-size: 11px;
            }
        }
    }

    .bulletin-wrapper {
        height: 16px;
        padding: 0 10px;

        .el-image {
            width: 16px;
            height: 16px;
            float: left;
            margin-right: 6px;
        }

        .text {
            font-size: 11px;
            color: white;
            float: left;
            line-height: 16px;
        }

        .detail {
            color: white;
            float: right;
            font-size: 11px;
            line-height: 16px;
            cursor: pointer;

            i {
                font-size: 16px;
                line-height: 16px;
                float: right;
            }
        }
    }
}
</style>