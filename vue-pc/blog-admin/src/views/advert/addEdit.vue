<template>
    <div class="add-edit-advert">
        <el-dialog :title="title" :visible.sync="visible" width="500px" :before-close="handleClose">
            <el-form :rules="rules" ref="formData" :model="formData" label-width="100px" label-position="right" style="width: 400px" status-icon>
                <el-form-item label="广告图片：" prop="imageUrl">
                    <!-- accept="image/png, image/jpeg" ：接收上传的类型
                    action 指定上传地址，但是我们不用它默认的，所以给它空的，不能把它删除，默认这个必须要有 show-file-list 是否显示已上传文件列表，因为上传的是图片，不是文件，所以不要显示 http-request 自定义上传实现-->
                    <el-upload class="avatar-uploader" action :show-file-list="false" :http-request="uploadMainImg">
                        <img v-if="formData.imageUrl" :src="formData.imageUrl" class="avatar" />
                        <!-- <el-button v-else type="primary" icon="el-icon-plus" size="mini">添加图片</el-button> -->
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
                <el-form-item label="广告标题：" prop="title">
                    <el-input v-model="formData.title" />
                </el-form-item>

                <el-form-item label="广告链接：" prop="advertUrl">
                    <el-input v-model="formData.advertUrl" />
                </el-form-item>

                <el-form-item label="跳转方式：" prop="advertTarget">
                    <!-- "_blank", "_self" -->
                    <el-select v-model="formData.advertTarget" clearable style="width:185px">
                        <el-option label="新窗口打开" value="_blank"></el-option>
                        <el-option label="当前窗口打开" value="_self"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="状态：" prop="status">
                    <el-radio-group v-model="formData.status">
                        <el-radio :label="1">正常</el-radio>
                        <el-radio :label="0">禁用</el-radio>
                    </el-radio-group>
                </el-form-item>

                <el-form-item label="广告位置：" prop="position">
                    <el-input-number v-model="formData.position" :min="1" :max="10000" style="width: 300px"></el-input-number>
                </el-form-item>

                <el-form-item label="排序：" prop="sort">
                    <el-input-number v-model="formData.sort" :min="1" :max="10000" style="width: 300px"></el-input-number>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm('formData')" size="mini">确定</el-button>
                    <el-button size="mini" @click="handleClose">取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'add-edit-advert',
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
        oldImageUrl: String, // 编辑时，查询出来的那张图片地址
        remoteClose: Function // 用于关闭窗口
    },
    data() {
        return {
            rules: {
                imageUrl: [
                    { required: true, message: '请上传广告图片', trigger: 'blur' }
                ],
                title: [
                    { required: true, message: '请输入广告标题', trigger: 'blur' }
                ],
                advertUrl: [
                    { required: true, message: '请输入广告链接', trigger: 'blur' }
                ],
                advertTarget: [
                    { required: true, message: '请选择打开方式', trigger: 'change' }
                ],
                status: [
                    { required: true, message: '请选择状态', trigger: 'change' }
                ],
                position: [
                    { required: true, message: '请输入广告位置', trigger: 'blur' }
                ],
                sort: [
                    { required: true, message: '请输入排序号', trigger: 'blur' }
                ],
            }
        }
    },
    methods: {
        // 关闭窗口
        handleClose() {
            // 将表单清空
            this.$refs['formData'].resetFields()
            // 注意不可以通过  this.visible = false来关闭，因为它是父组件的属性
            this.remoteClose()
        },

        // 上传图片, file 上传的图片对象
        uploadMainImg(file) {
            const data = new FormData() // 创建一个空对象实例
            data.append('file', file.file)
            this.$api.uploadImg(data).then(res => {
                // 以防图片多次上传，上传成功后，把原来的图片删除
                this.deleteImg()
                // 回显图片
                this.formData.imageUrl = res.data
            }).catch(error => {
                this.$message({
                    type: 'error',
                    message: '上传失败'
                })
            })
        },

        // 删除主图，上传成功和关闭窗口调用删除上一次上传的图片
        deleteImg() {
            // 以防止上传后，表单没有提交，这样就不能把进入修改页面时最初的图片删除，如果删除了下次再点击修改就找不到图片了
            if (this.formData.imageUrl && this.formData.imageUrl !== this.oldImageUrl) {
                // 发送请求删除
                this.$api.deleteImg(this.formData.imageUrl)
            }
        },

        // 提交表单数据
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    // 校验通过，提交表单数据
                    this.submitData()
                } else {
                    return false;
                }
            })
        },

        // 提交表单数据
        async submitData() {
            let res = null
            if (this.formData.id) {
                res = await this.$api.updateAdvert(this.formData)
            } else {
                res = await this.$api.addAdvert(this.formData)
            }

            if (res.code === 20000) {
                this.$message({
                    message: res.message,
                    type: 'success'
                })
                // 关闭窗口
                this.handleClose()
            } else {
                this.$message({
                    message: '保存失败',
                    type: 'error'
                })
            }
        },
    }
};
</script>

<style lang='scss' scoped>
.add-edit-advert::v-deep {
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409eff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
}
</style>