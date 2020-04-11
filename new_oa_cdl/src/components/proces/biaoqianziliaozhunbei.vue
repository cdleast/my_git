<template>
    <div class="biaoqianziliaozhunbei">
        <el-row :gutter="20">
            <el-col :span="16" class="main_left">
                <procesLeft></procesLeft>
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
    name: "biaoqianziliaozhunbei",
    components: {
        procesLeft,
        procesRight
    }
};
</script>