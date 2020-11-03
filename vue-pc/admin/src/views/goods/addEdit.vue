<template>
    <el-dialog :title="title" :visible.sync="visible" width="500px" :before-close="handleClose">
        <el-form
            :rules="rules"
            ref="formData"
            label-width="100px"
            label-position="right"
            style="width: 400px;"
            :model="formData"
        >
            <el-form-item label="商品名称" prop="name">
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="商品编码" prop="code">
                <el-input v-model="formData.code"></el-input>
            </el-form-item>
            <el-form-item label="商品规格" prop="spec">
                <el-input v-model="formData.spec"></el-input>
            </el-form-item>
            <el-form-item label="零售价" prop="retailPrice">
                <el-input v-model="formData.retailPrice"></el-input>
            </el-form-item>
            <el-form-item label="进货价" prop="purchasePrice">
                <el-input v-model="formData.purchasePrice"></el-input>
            </el-form-item>
            <el-form-item label="库存数量" prop="storageNum">
                <el-input v-model="formData.storageNum"></el-input>
            </el-form-item>
            <el-form-item label="供应商" prop="supplierName">
                <el-input
                    readonly
                    @click.native="dialogSupplierVisible = true"
                    v-model="formData.supplierName"
                    placeholder="选择供应商"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="submitForm('formData')">确 定</el-button>
            </el-form-item>
        </el-form>

        <!-- 选择供应商 -->
        <el-dialog append-to-body title="选择供应商" :visible.sync="dialogSupplierVisible" width="800px">
            <supplier @option-supplier="optionSupplier" :isDialog="true"></supplier>
        </el-dialog>
    </el-dialog>
</template>

<script>
import supplier from '@/views/supplier' // 复用供应商管理页
export default {
    name: 'add-edit-goods',
    components: {
        supplier
    },
    props: {
        title: { // 弹窗的标题
            type: String,
            default: ''
        },
        visible: { // 弹出窗口，true弹出
            type: Boolean,
            default: false
        },
        formData: { // 提交表单数据
            type: Object,
            default: {}
        },
        remoteClose: Function // 用于关闭窗口
    },
    data() {
        return {
            dialogSupplierVisible: false, // 弹出选择供应商对话框
            rules: {
                name: [
                    { required: true, message: '商品名称不能为空', trigger: 'blur' }
                ],
                code: [
                    { required: true, message: '商品编码不能为空', trigger: 'blur' }
                ],
                retailPrice: [
                    { required: true, message: '零售价不能为空', trigger: 'blur' }
                ]
            },
        }
    },
    methods: {
        // 关闭窗口
        handleClose() {
            // 将表单清空
            this.$refs['formData'].resetFields()
            // 注意不可以通过  this.visible = false来关闭，因为它是父组件的属性
            this.remoteClose() // 子组件传递的方法
        },


        // 验证表单成功
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) { // 校验通过，提交表单数据
                    this.submitData()
                } else {
                    return false;
                }
            })
        },


        // 提交表单数据
        async submitData() {
            let res = null
            if (this.formData.id) { // 编辑
                res = await this.$api.updateGoodsId(this.formData)
                console.log(this.formData)
            } else { // 新增
                res = await this.$api.addGoods(this.formData)
            }
            if (res.data.code == 20000) {
                this.$message({
                    message: res.data.message,
                    type: 'success'
                })
                this.handleClose() // 关闭窗口
            } else {
                this.$message({
                    message: res.data.message,
                    type: 'error'
                })
            }
        },


        // 选择供应商对话框-接收子组件传递回来的数据
        optionSupplier(currentRow) {
            this.formData.supplierName = currentRow.name // 供应商名称
            this.formData.supplierId = currentRow.id // 供应商ID
            this.dialogSupplierVisible = false //关闭窗口
        },
    }
};
</script>

<style lang='scss' scoped>
</style>