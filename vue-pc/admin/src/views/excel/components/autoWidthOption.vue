<template>
    <div class="autoWidthOption">
        <label class="radio-label">内容是否自适应宽度:</label>
        <el-radio-group size="mini" v-model="autoWidth">
            <el-radio :label="true" border>True</el-radio>
            <el-radio :label="false" border>False</el-radio>
        </el-radio-group>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        autoWidth: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        }
    }
}
</script>
