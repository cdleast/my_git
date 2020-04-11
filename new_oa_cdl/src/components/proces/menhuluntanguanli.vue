<template>
    <div class="menhuluntanguanli">
       <el-row :gutter="20">
            <el-col :span="16" class="main_left">
                <procesLeft :rightChild="rightChild"></procesLeft>
            </el-col>

            <el-col :span="8" class="main_right">
                <procesRight></procesRight>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import procesLeft from "../../views/proces/proces-left";
import procesRight from "../../views/proces/proces-right";
export default {
    name: "menhuluntanguanli",
    components: {
        procesLeft,
        procesRight
    },
    computed: {
        rightChild() {
            return this.$store.getters.allLeftMenu.filter(res => {
                if (res.ROUTER == this.$route.path) {
                    return res.CHILD;
                }
            });
        }
    }
};
</script>