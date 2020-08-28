<template>
    <div class="about-join">
        <div class="join_header">
            <div class="text">
                <h1>寻找与小米并肩快跑的伙伴</h1>
                <div class="btn">前往招聘首页</div>
            </div>
        </div>
        <div class="join_content">
            <div class="flex-wrap">
                <div class="items">
                    <h2>社会招聘</h2>
                    <p>
                        小米崇尚创新、快速的互联网文化
                        <br />正在寻找富有创意和想法的你
                    </p>
                    <el-link>前往社会招聘 ></el-link>
                </div>
                <div class="items">
                    <h2>校园招聘</h2>
                    <p>
                        让未来的你喜欢现在的自己
                        <br />加入我们，在行动中收获梦想
                    </p>
                    <el-link>前往校园招聘 ></el-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "about-join",
    data() {
        return {};
    },
};
</script>

<style lang='scss' scoped>
.about-join {
    background: #fff;

    .join_header {
        background: url(https://s01.mifile.cn/i/about/join_header.jpg) no-repeat;
        height: 450px;

        .text {
            padding: 68px 0 0 694px;
            color: #fffdea;
        }

        h1 {
            font-size: 28px;
            font-weight: 700;
        }

        .btn {
            margin: 20px 30px 30px 80px;
            border: 2px solid #fffdea;
            color: #fffdea;
            font-size: 16px;
            width: 160px;
            height: 40px;
            line-height: 36px;
            text-align: center;
            font-weight: 700;
            cursor: pointer;
        }
    }

    .join_content {
        height: 270px;

        .flex-wrap {
            display: flex;

            .items {
                flex: 1;
                margin: 35px 0 0 172px;
                padding-bottom: 30px;

                &:first-child {
                    border-right: 1px solid #e0e0e0;
                }

                h2 {
                    font-size: 24px;
                    font-weight: 400;
                    color: #424242;
                    padding-top: 35px;
                }

                p {
                    color: #757575;
                    margin: 1em 0;
                }

                .el-link {
                    color: #ff6700;
                }
            }
        }
    }
}
</style>