<template>
    <div class="list">
        <!-- 左侧导航 -->
        <cube-scroll class="leftpanels">
            <ul>
                <li
                    v-for="(list,index) in tabslabel"
                    @click="selectlist(index)"
                    :class="list.active?'active':''"
                    :key="index"
                >{{list.label}}</li>
            </ul>
        </cube-scroll>

        <!-- 右侧内容 -->
        <cube-scroll class="rightpanels">
            <ul>
                <li v-for="(tag,index) in tags" :key="index">
                    <img :src="tag.image" alt />
                    <p>
                        {{tag.label}}
                        <i class="cubeic-add" @click="addtocart($event,tag)"></i>
                    </p>
                </li>
            </ul>
        </cube-scroll>
    </div>
</template>

<script>
export default {
    name: "list",
    data() {
        return {
            ball: {
                show: false,
                el: ""
            },
            tags: [], // 右侧内容数组
            tabslabel: [
                {
                    label: "热门推荐",
                    active: true
                },
                {
                    label: "手机数码",
                    active: false
                },
                {
                    label: "家用电器",
                    active: false
                },
                {
                    label: "家用空调",
                    active: false
                },
                {
                    label: "电脑产品",
                    active: false
                },
                {
                    label: "计生情趣",
                    active: false
                },
                {
                    label: "美妆护肤",
                    active: false
                },
                {
                    label: "口红",
                    active: false
                },
                {
                    label: "手袋",
                    active: false
                },
                {
                    label: "金银财宝",
                    active: false
                },
                {
                    label: "手机数码",
                    active: false
                },
                {
                    label: "手机数码",
                    active: false
                }
            ]
        };
    },
    created() {
        //获取默认的分类数据
        this.getclassify(0);
    },
    // DOM加载完成之后操作
    mounted() {
        //设置滚动盒子的高度
        const leftpanels = document.querySelector(".leftpanels");
        const rightpanels = document.querySelector(".rightpanels");
        const bodyheight = document.documentElement.clientHeight;
        // 73是底部的高度
        leftpanels.style.height = bodyheight - 73 + "px";
        rightpanels.style.height = bodyheight - 73 + "px";
    },
    methods: {
        //获取分类
        async getclassify(index) {
            const result = await this.$axios.get("/api/classify", {
                params: { type: index }
            });
            this.tags = result.data;
        },
        //点击左侧分类
        selectlist(index) {
            this.tabslabel.forEach((val, ind) => {
                if (index == ind) {
                    val.active = true;
                } else {
                    val.active = false;
                }
            });
            this.getclassify(index);
        },
        //添加商品到购物车
        addtocart(e, tag) {
            this.$store.commit("tocart", tag);
            //让我们小球显示出来
            this.ball.show = true;
            //获取点击元素
            this.ball.el = e.target;
        }
    }
};
</script>

<style lang="scss" scoped>
.list {
    display: flex;

    .leftpanels {
        width: 30%;

        li {
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #2864fa;
            color: #333;
            background: #f8f8f8;
            font-size: 14px;
            padding-left: 15px;
            box-sizing: border-box;
        }

        .active {
            background: #fff;
            color: #e93b3d;
        }
    }

    .rightpanels {
        width: 70%;

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                width: 50%;
                justify-content: center;
                align-items: center;
                font-size: 15px;
                text-align: center;

                img {
                    width: 80px;
                    height: 80px;
                }

                .cubeic-add {
                    font-size: 18px;
                }
            }
        }
    }
}

.ball-wrap {
    .ball {
        position: fixed;
        left: 70%;
        bottom: 10px;
        z-index: 1003;
        color: red;
        transition: all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41);

        .inner {
            width: 16px;
            height: 16px;
            transition: all 1s linear;
        }
    }
}
</style>