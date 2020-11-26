<template>
    <el-dialog title="拟稿部门" :visible.sync="visible" width="500px" :before-close="handleClose">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        <div class="btn-center">
            <el-button @click="handleClose" size="small" type="primary">确定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name: 'department',
    props: {
        visible: { // 弹出窗口，true弹出
            type: Boolean,
            default: false
        },
        remoteClose: Function // 用于关闭窗口
    },
    data() {
        return {
            data: [
                {
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                },
                {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                },
                {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
        }
    },
    methods: {
        // 选择节点
        handleNodeClick(data) {
            // 点击后,要将点击的数据传递到父组件(查询统计中心查询处), 
            // 则可以通过触发父组件中的option-affiliation, 触发之后 ,
            // 父组件可以在 option-affiliation 这个事件对应的处理函数中进行接收数据currentRow
            this.$emit('option-data', data, "department")
        },

        // 关闭窗口
        handleClose() {
            // 将表单清空
            // 注意不可以通过  this.visible = false来关闭，因为它是父组件的属性
            this.remoteClose("department") // 子组件传递的方法
        },
    }
};
</script>

<style lang='scss' scoped>
</style>