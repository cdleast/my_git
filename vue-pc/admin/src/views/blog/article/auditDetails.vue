<template>
    <el-dialog :title="title" :visible.sync="visible" width="70%" :before-close="handleClose">
        <!-- status-icon 当表单校验不通过时，输入框右侧有个 x 小图标 -->
        <el-form ref="formData" :model="formData" label-width="100px" label-position="right" status-icon>
            <el-form-item label="标题：">
                <el-input v-model="formData.title" readonly></el-input>
            </el-form-item>
            <el-form-item label="标签：">
                <el-cascader
                    disabled
                    :options="labelOptions"
                    style="display: block"
                    v-model="formData.labelIds"
                    :props="{multiple: true, emitPath: false, children: 'labelList', value: 'id', label: 'name'}"
                    clearable
                ></el-cascader>
            </el-form-item>
            <el-form-item label="主图：">
                <img :src="formData.imageUrl" style="width: 178px; height: 178px; display:block" />
            </el-form-item>
            <el-form-item label="是否公开：">
                <el-radio-group v-model="formData.ispublic" disabled>
                    <el-radio :label="1">公开</el-radio>
                    <el-radio :label="0">不公开</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="简介：">
                <el-input type="textarea" v-model="formData.summary" readonly></el-input>
            </el-form-item>
            <el-form-item label="内容：">
                <!-- :editable="false" 禁止编辑-->
                <mavonEditor ref="md" v-model="formData.mdContent" :editable="false" />
            </el-form-item>

            <!-- 在按钮行添加 v-if="isAudit" 判断是否是审核页面 -->
            <el-form-item align="center" v-if="isAudit">
                <el-button type="primary" @click="auditSuccess()">审核通过</el-button>
                <el-button type="danger" @click="auditFail()">审核不通过</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>

<script>
// 引入 Markdown 插件 mavonEditor 组件和样式, 一定不要少了大括号 
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    name: 'audit-details-article',
    components: {
        mavonEditor
    },
    props: {
        id: null, // 文章id
        isAudit: true, // 是否为审核页面，
        title: { // 弹窗的标题
            type: String,
            default: ''
        },
        visible: { // 弹出窗口，true弹出
            type: Boolean,
            default: false
        },
        remoteClose: Function // 用于关闭窗口
    },
    watch: { // 监听
        visible(val) { // 监听visible的变化,将改变之后的值作为参数传入
            if (val) {
                // val 为true，则为打开窗口，打开之后查询文章详情
                this.getArticleDetails()
                this.getLabelOptions()
            }
        }
    },
    data() {
        return {
            formData: {}, // 查询到的文章详情
            labelOptions: [] // 渲染分类标签级联下拉框
        }
    },
    methods: {
        // 关闭窗口
        handleClose() {
            // 触发父组件关闭窗口
            this.remoteClose()
        },


        // 查询文章详情
        async getArticleDetails() {
            await this.$api.getArticleDetails(this.id).then(res => {
                this.formData = res.data.data
            })
        },


        // 获取所有正常状态的分类和标签
        async getLabelOptions() {
            await this.$api.getCategoryAndLabel().then(res => {
                this.labelOptions = res.data.data
            })
        },


        // 审核通过触发的方法
        auditSuccess() {
            this.$confirm('确认审核通过吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 发送审核通过请求
                this.$api.auditSuccess(this.id).then(res => {
                    // 提示信息
                    this.$message({
                        type: 'success',
                        message: res.data.message
                    })
                    // 关闭弹窗
                    this.remoteClose()
                })
            }).catch(() => {
                // 取消删除，不用理会        
            })
        },


        // 审核不通过触发的方法
        auditFail() {
            this.$confirm('确认审核不通过吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 发送审核通过请求
                this.$api.auditFail(this.id).then(res => {
                    // 提示信息
                    this.$message({
                        type: 'success',
                        message: res.data.message
                    })
                    // 关闭弹窗
                    this.remoteClose()
                })
            }).catch(() => {
                // 取消删除，不用理会        
            })
        },
    }
};
</script>

<style lang='scss' scoped>
</style>