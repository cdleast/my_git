<template>
    <div class="common-footer">
        <div class="container">
            <div class="footer-service">
                <ul class="list-service clearfix">
                    <li v-for="(item,index) in footerService" :key="index">
                        <span :class="'icon ' + item.icon"></span>
                        <span>{{ item.name }}</span>
                    </li>
                </ul>
            </div>

            <div class="footer-links clearfix"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "common-footer",
    data() {
        return {
            footerService: [],
        };
    },
    created() {
        this.getFooterDataList();
    },
    methods: {
        // 获取数据
        async getFooterDataList() {
            await this.$api.getFooterDataList().then((res) => {
                console.log(res);
                this.footerService = res.data.footerService;
            });
        },
    },
};
</script>

<style lang='scss' scoped>
.common-footer {
    .footer-service {
        padding: 27px 0;
        border-bottom: 1px solid #e0e0e0;

        .list-service {
            display: flex;

            li {
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #616161;
                transition: color 0.2s;
                font-size: 16px;
                border-left: 1px solid #e0e0e0;
                cursor: pointer;

                .icon {
                    font-size: 24px;
                    vertical-align: text-bottom;
                    margin-right: 5px;
                }

                &:first-child {
                    border-left: none;
                }

                &:hover {
                    color: #ff6700;
                }
            }
        }
    }

    .footer-links{
        padding: 40px 0;
    }
}
</style>