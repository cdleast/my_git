<template>
    <div class="huiyiguanli">
        <el-row :gutter="20">
            <el-col :span="16" class="main_left">
                <procesChildLeft :leftMenu="leftMenu"></procesChildLeft>
            </el-col>

            <el-col :span="8" class="main_right">
                <procesChildRight></procesChildRight>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import procesChildLeft from "@/views/proces/proces-child-left";
import procesChildRight from "@/views/proces/proces-child-right";
export default {
    name: "huiyiguanli",
    components: {
        procesChildLeft,
        procesChildRight
    },
    props: {
        rightChildLeft: {
            type: Array
        }
    },
    computed: {
        leftMenu() {
            return this.rightChildLeft.filter(res => {
                if (res.router == this.$route.path) {
                    return res.CHILD;
                }
            });
        }
    }
};
</script>

<style lang='scss' scoped>
</style>