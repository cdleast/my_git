<template>
    <el-form :inline="inline" ref="form" :model="form" label-width="80px">
        <el-form-item v-for="item in formLabel" :key="item.model" :label="item.label">
            <!-- 输入框 -->
            <el-input
                v-model="form[item.model]"
                :placeholder="'请输入' + item.label"
                v-if="!item.type"
            ></el-input>

            <!-- 下拉框 -->
            <el-select v-model="form[item.model]" placeholder="请选择" v-if="item.type === 'select'">
                <el-option
                    v-for="item in item.opts"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>

            <!-- switch开关 -->
            <el-switch v-model="form[item.model]" v-if="item.type === 'switch'"></el-switch>

            <!-- 日期选择器 -->
            <el-date-picker
                v-model="form[item.model]"
                type="date"
                placeholder="选择日期"
                v-if="item.type === 'date'"
                value-format="yyyy-MM-dd"
            ></el-date-picker>
        </el-form-item>

        <!-- 插槽，用来放一些按钮 -->
        <el-form-item>
            <slot></slot>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    name: "common-form",
    props: {
        inline: Boolean, // 横向还是纵向，行内的表单域，默认false
        form: Object, // form数据
        formLabel: Array // form左侧label文字
    },
    data() {
        return {};
    }
};
</script>

<style lang='scss' scoped>
</style>