<template>
    <div class="filename">
        <label class="radio-label">文件名:</label>
        <el-input
            style="width:345px;"
            size="mini"
            v-model="filename"
            placeholder="请输入文件名 (默认 excel-list)"
            prefix-icon="el-icon-document"
        />
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    computed: {
        filename: {
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
