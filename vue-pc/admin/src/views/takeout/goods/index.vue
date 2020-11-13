<template>
    <div class="takeout-goods">
        <!-- 分类列表 -->
        <div class="menu-wrapper">
            <ul>
                <!-- 专场 -->
                <li class="menu-item" @click="selectMenu(0)">
                    <p class="text">
                        <img class="icon" :src="container.tag_icon" v-if="container.tag_icon" />
                        {{container.tag_name}}
                    </p>
                </li>

                <li class="menu-item" v-for="(item,index) in goods" :key="index" @click="selectMenu(index+1)">
                    <p class="text">
                        <img class="icon" :src="item.icon" v-if="item.icon" />
                        {{item.name}}
                    </p>
                    <i class="num" v-show="calculateCount(item.spus)">{{calculateCount(item.spus)}}</i>
                </li>
            </ul>
        </div>

        <!-- 商品列表 -->
        <div class="foods-wrapper">123</div>
    </div>
</template>

<script>
export default {
    name: 'takeout-goods',
    props: {
        goods: {
            type: Array,
            default() {
                return {}
            }
        },
        poiInfo: {
            type: Object,
            default() {
                return {}
            }
        },
        container: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        selectMenu() {

        },

        calculateCount(spus) {
            let count = 0
            spus.forEach((food) => {
                if (food.count > 0) {
                    count += food.count
                }
            })
            return count
        },
    }
};
</script>

<style lang='scss' scoped>
.takeout-goods {
    display: flex;
    overflow: hidden;
    width: 100%;

    .menu-wrapper {
        flex: 0 0 30%;
        background: #f4f4f4;

        ul > li {
            padding: 16px 23px 15px 10px;
            border-bottom: 1px solid #e4e4e4;
            position: relative;
            cursor: pointer;
        }
    }

    .foods-wrapper {
        flex: 1;
    }
}
</style>