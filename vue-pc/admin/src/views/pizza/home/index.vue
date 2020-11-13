<template>
    <div class="pizza-home">
        <div class="pizza-container">
            <div class="background">
                <h1>欢迎大家品尝pizza!</h1>
                <h2>这里有你非常喜欢的pizza!</h2>
            </div>
        </div>

        <pizza-panel class="pizza-panel"></pizza-panel>
    </div>
</template>

<script>
import pizzaPanel from '../components/panel' // 主页提示面板

export default {
    name: 'pizza-home',
    components: {
        pizzaPanel
    }
};
</script>

<style lang='scss' scoped>
.pizza-container {
    background: url("~@/assets/images/pizza/pizza.jpg") no-repeat;
    background-size: 100% 100%;
    height: 85vh;
    display: flex;
    align-items: center;
    margin-bottom: 20px;

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