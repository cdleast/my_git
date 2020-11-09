<template>
    <div class="pizza">
        <pizza-header class="pizza-header"></pizza-header>

        <template v-if="$route.name == 'pizza'">
            <div class="pizza-container">
                <div class="background">
                    <h1>欢迎大家品尝pizza!</h1>
                    <h2>这里有你非常喜欢的pizza!</h2>
                    <el-button type="primary" @click="goToMenu">Let's order!</el-button>
                </div>
            </div>

            <pizza-panel class="pizza-panel"></pizza-panel>
        </template>

        <router-view></router-view>
    </div>
</template>

<script>
import pizzaHeader from './components/header' // 头部
import pizzaPanel from './components/panel' // 主页提示面板

export default {
    name: 'pizza',
    components: {
        pizzaHeader,
        pizzaPanel
    },
    data() {
        return {}
    },
    methods: {
        goToMenu() {
            this.$router.push({ name: 'menuLink' })
        }
    }
};
</script>

<style lang='scss' scoped>
.pizza-container {
    background: url("~@/assets/images/pizza/pizza.jpg") no-repeat;
    background-size: 100% 100%;
    margin: 30px 0;
    height: 85vh;
    display: flex;
    align-items: center;

    .background {
        background: #eee;
        opacity: 0.8;
        width: 70%;
        height: 50%;
        margin: 0 auto;
        text-align: center;

        h1,
        h2 {
            margin: 5%;
            font-size: 40px;
            font-weight: 700;
        }
    }
}
</style>