<template>
    <div class="proces-child-left">
        <div class="mainList" v-for="items in leftMenu" :key="items.ID">
            <div class="mainlist_div" v-for="item in items.CHILD" :key="item.ID">
                <h3 tag="h3"  @click="clickH3(item.ROUTER)">{{item.NAME}}</h3>
                <ul v-for="i in item.CHILD" :key="i.Id">
                    <li @click="clickLi(i.ROUTER)">{{i.NAME}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "proces-child-left",
    props: {
        leftMenu: {
            type: Array
        }
    },
    methods:{
        clickH3(item){
            this.$router.push(item);
        },
        clickLi(item){
            this.$router.push(item);
        }
    }
};
</script>

<style lang='scss' scoped>
// 左侧列表
.mainList {
    -moz-column-count: 3; /* Firefox */
    -webkit-column-count: 3; /* Safari and Chrome */
    column-count: 3;
    column-fill: auto;
    height: 800px;
    overflow: hidden;
}
.mainList .mainlist_div {
    margin-bottom: 10px;
}
.mainList h3 {
    font-size: 14px;
    color: #191c3d;
    border-bottom: 1px solid #ededed;
    line-height: 30px;
    cursor: pointer;
}
.mainList ul > li {
    font-size: 12px;
    color: #8c8d9e;
    line-height: 26px;
    cursor: pointer;
}
.mainList ul > li:hover {
    color: #1989fa;
}
</style>