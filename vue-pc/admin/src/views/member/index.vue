<template>
    <div class="member">
        <!-- 条件查询 -->
        <el-form ref="searchForm" :inline="true" :model="query" size="mini">
            <el-form-item prop="cardNum">
                <el-input v-model="query.cardNum" placeholder="会员卡号" style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item prop="name">
                <el-input v-model="query.name" placeholder="会员名字" style="width: 200px"></el-input>
            </el-form-item>
            <el-form-item prop="payType">
                <el-select v-model="query.payType" placeholder="支付类型" clearable filterable style="width: 120px">
                    <el-option label="现金" value="1"></el-option>
                    <el-option label="微信" value="2"></el-option>
                    <el-option label="支付宝" value="3"></el-option>
                    <el-option label="银行卡" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="birthday">
                <el-date-picker
                    style="width: 200px"
                    value-format="yyyy-MM-dd"
                    v-model="query.birthday"
                    type="date"
                    placeholder="出生日期"
                ></el-date-picker>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="queryData">查询</el-button>
                <el-button type="primary" @click="handleAdd">新增</el-button>
                <el-button @click="reloadData">重置</el-button>
            </el-form-item>
        </el-form>

        <!-- 数据渲染，带斑马纹效果 -->
        <el-table :data="list" stripe border style="width: 100%">
            <el-table-column align="center" type="index" label="序号" width="60"></el-table-column>
            <el-table-column align="center" prop="cardNum" label="会员卡号"></el-table-column>
            <el-table-column align="center" prop="name" label="会员姓名" width="90"></el-table-column>
            <el-table-column align="center" prop="birthday" label="会员生日"></el-table-column>
            <el-table-column align="center" prop="phone" label="手机号码"></el-table-column>
            <el-table-column align="center" prop="integral" label="可用积分"></el-table-column>
            <el-table-column align="center" prop="money" label="开卡金额"></el-table-column>
            <el-table-column align="center" prop="payType" label="支付类型">
                <template slot-scope="scope">
                    <el-tag v-if="scope.row.payType == 1" type="primary">现金</el-tag>
                    <el-tag v-if="scope.row.payType == 2" type="success">微信</el-tag>
                    <el-tag v-if="scope.row.payType == 3" type="warning">支付宝</el-tag>
                    <el-tag v-if="scope.row.payType == 4" type="danger">银行卡</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" prop="address" label="会员地址"></el-table-column>
            <el-table-column align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary" @click="handleEdit(scope.row.id)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页组件 -->
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="page.current"
            :page-sizes="[10, 20, 50]"
            :page-size="page.size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.total"
        ></el-pagination>

        <!-- 新增和编辑页 -->
        <add-edit
            :title="addEdit.title"
            :formData="addEdit.formData"
            :visible="addEdit.visible"
            :remoteClose="remoteClose"
        ></add-edit>
    </div>
</template>

<script>
// 支付类型-使用过滤器的时候需要用这个，否则不用，需要在data中绑定
const payTypeOptions = [
    { type: '1', name: '现金' },
    { type: '2', name: '微信' },
    { type: '3', name: '支付宝' },
    { type: '4', name: '银行卡' },
]
import addEdit from './addEdit' // 新增和编辑页
export default {
    name: 'member',
    components: {
        addEdit
    },
    data() {
        return {
            list: [], // 数据列表
            query: {}, // 查询条件
            page: {
                current: 1, // 当前页数
                size: 20, // 每页查询条数
                total: 0 // 总条数
            },
            addEdit: { // 新增和编辑传递参数
                title: '', // 弹窗标题
                visible: false, // 弹窗状态
                formData: {}
            }
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        // 获取数据列表
        async fetchData() {
            await this.$api.getMemberSearchList(this.query, this.page.current, this.page.size).then(res => {
                this.list = res.data.data.rows
                this.page.total = res.data.data.total
            })
        },


        // 编辑
        async handleEdit(id) {
            await this.$api.getMemberId(id).then(res => {
                if (res.data.code === 20000) {
                    this.addEdit.formData = res.data.data
                    this.addEdit.title = '编辑'
                    this.addEdit.visible = true
                }
            })
        },


        // 删除
        handleDelete(id) {
            this.$confirm('确认删除这条记录吗？', '提示', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
            }).then(() => {
                this.$api.deleteMemberId(id).then(res => {
                    this.$message({
                        message: res.data.message,
                        type: res.data.flag ? 'success' : 'error'
                    })
                    if (res.flag) {
                        // 删除成功，刷新列表数据
                        this.fetchData()
                    }
                })
            }).catch(() => {
                // 取消，不用理会
                console.log('取消删除')
            })
        },


        // 当每页显示多少条改变后触发
        handleSizeChange(val) {
            this.page.size = val
            this.fetchData()
        },


        // 切换页码触发
        handleCurrentChange(val) {
            this.page.current = val
            this.fetchData()
        },


        // 查询
        queryData() {
            this.page.current = 1
            this.fetchData()
        },


        // 新增
        handleAdd() {
            this.addEdit.visible = true
            this.addEdit.title = '新增'
        },


        // 重置
        reloadData() {
            this.$refs.searchForm.resetFields()
        },


        // 子组件会触发此方法关闭子组件
        remoteClose() {
            this.addEdit.visible = false
        },
    },
    filters: {
        // 使用过滤器判断支付类型
        payTypeFilter(type) {
            /* payTypeOptions.find(obj => {
                return obj.type === type
            }) */
            // 在过滤 器当中不能引用当前实例 this   this.payTypeOptions 错误的
            const payObj = payTypeOptions.find(obj => obj.type === type)
            return payObj ? payObj.name : null
        }
    }
};
</script>

<style lang='scss' scoped>
</style>