<template>
    <div class="pizza-admin">
        <el-row :gutter="40">
            <el-col :span="16">
                <h3>添加新的Pizza</h3>
                <el-form ref="form" :model="form" status-icon label-width="80px">
                    <el-form-item label="品种" prop="varieties">
                        <el-input v-model="form.varieties"></el-input>
                    </el-form-item>
                    <el-form-item label="描述" prop="desc">
                        <el-input type="textarea" :autosize="{ minRows: 3}" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="选项尺寸1" prop="size1">
                        <el-input v-model="form.size1"></el-input>
                    </el-form-item>
                    <el-form-item label="选项价格1" prop="price1">
                        <el-input v-model="form.price1"></el-input>
                    </el-form-item>
                    <el-form-item label="选项尺寸2" prop="size2">
                        <el-input v-model="form.size2"></el-input>
                    </el-form-item>
                    <el-form-item label="选项价格2" prop="price2">
                        <el-input v-model="form.price2"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button style="width:100%" type="primary" @click="onSubmit('form')">提交</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="8">
                <h3>菜单</h3>
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column label="品种" width="60"></el-table-column>
                    <el-table-column align="center" label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div>暂无任何商品</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'pizza-admin',
    data() {
        return {
            form: {},
            tableData: [{
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }]
        }
    },
    methods: {
        // 提交
        async onSubmit(formName) {
            await this.$api.addPizza(this.form).then(res => {
                if (res.data.code == 20000) {
                    this.$message.success(res.data.message)
                    this.$refs[formName].resetFields()
                }
            })
        },


        // 删除
        handleDelete(id) {

        }
    }
};
</script>

<style lang='scss' scoped>
.pizza-admin {
    h3 {
        color: #6c757d;
        font-size: 28px;
        font-weight: 500;
        margin-bottom: 20px;
    }
}
</style>