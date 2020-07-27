<template>
    <div class="user">
        <!-- 新增查询部分 -->
        <div class="user-header">
            <el-button type="primary" @click="isShow=true">新增</el-button>
            <common-form inline :form="searchFrom" :formLabel="formLabel">
                <el-button type="primary" @click="getUserList(searchFrom.keyword)">搜索</el-button>
            </common-form>
        </div>

        <!-- 数据列表部分 -->
        <div class="user-content">
            <common-table
                @changePage="getUserList"
                :tableData="tableData"
                :tableLabel="tableLabel"
                :config="config"
                @editUser="editUser"
                @delUser="delUser"
            ></common-table>
        </div>

        <!-- 新增/编辑弹窗页 -->
        <el-dialog :title="operateType === 'add' ? '新增用户' : '编辑用户'" :visible.sync="isShow">
            <common-form :formLabel="operateFormLabel" :form="operateForm" ref="form"></common-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShow = false">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import CommonForm from "@/components/global/CommonForm";
import CommonTable from "@/components/global/CommonTable";
export default {
    name: "UserManage",
    components: {
        CommonForm,
        CommonTable
    },
    data() {
        return {
            // 输入框字段
            searchFrom: {
                keyword: ""
            },
            // form表单label部分
            formLabel: [
                {
                    // keyword这个找的是searchFrom里的keyword
                    model: "keyword",
                    label: ""
                }
            ],
            tableData: [], // 传⼊入的数据列列表
            // 传⼊入的数据字段
            tableLabel: [
                {
                    prop: "name",
                    label: "姓名"
                },
                {
                    prop: "age",
                    label: "年龄"
                },
                {
                    prop: "sexLabel",
                    label: "性别"
                },
                {
                    prop: "birth",
                    label: "出生日期",
                    width: 200
                },
                {
                    prop: "addr",
                    label: "地址",
                    width: 320
                }
            ],
            config: {
                page: 1, // 第一页
                total: 30, // 总数
                loading: false // 加载状态
            },
            operateType: "add", // 新增/编辑弹窗操作类型
            isShow: false, // 新增/编辑弹窗状态
            // 新增/编辑弹窗列表
            operateForm: {
                name: "",
                addr: "",
                age: "",
                birth: "",
                sex: ""
            },
            // 新增/编辑弹窗字段
            operateFormLabel: [
                {
                    model: "name",
                    label: "姓名"
                },
                {
                    model: "age",
                    label: "年龄"
                },
                {
                    model: "sex",
                    label: "性别",
                    type: "select",
                    opts: [
                        {
                            label: "男",
                            value: 1
                        },
                        {
                            label: "女",
                            value: 0
                        }
                    ]
                },
                {
                    model: "birth",
                    label: "出生日期",
                    type: "date"
                },
                {
                    model: "addr",
                    label: "地址"
                }
            ]
        };
    },
    created() {
        this.getUserList();
    },
    methods: {
        // 获取用户table部分数据
        getUserList(name = '') {
            this.config.loading = true;
            // 搜索时，页码需要设置为1，才能正确返回数据，因为数据是从第一页开始返回的
            name ? (this.config.page = 1) : "";

            this.$axios
                .get("/user/getUser", {
                    params: {
                        page: this.config.page
                    }
                })
                .then(res => {
                    this.tableData = res.data.list.map(item => {
                        item.sexLabel = item.sex === 0 ? "女" : "男";
                        return item;
                    });
                    this.config.total = res.data.count;
                    this.config.loading = false;
                });
        },

        // 新增用户
        addUser() {
            this.operateForm = {}; // 数据质空
            this.operateType = "add"; // 操作类型
            this.isShow = true; // 打开弹窗
        },

        // 编辑用户
        editUser(row) {
            this.operateType = "edit"; // 操作类型
            this.isShow = true; // 打开弹窗
            this.operateForm = row; // 把输入传给列表
        },

        // 新增/编辑提交操作
        confirm() {
            if (this.operateType === "edit") {
                this.$axios.post("/user/edit", this.operateForm).then(res => {
                    console.log(res.data);
                    this.isShow = false;
                    this.getUserList();
                });
            } else {
                this.$axios.post("/user/add", this.operateForm).then(res => {
                    this.isShow = false;
                    this.getUserList();
                });
            }
        },

        // 删除用户
        delUser(row) {
            this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
                confirmButtonText: "确定",
                cancelButtonText: "取消",
                type: "warning"
            })
                .then(() => {
                    let id = row.id;
                    this.$axios
                        .get("/user/del", {
                            params: {
                                id
                            }
                        })
                        .then(res => {
                            this.$message({
                                type: "success",
                                message: "删除成功!"
                            });
                            this.getUserList();
                        });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除"
                    });
                });
        }
    }
};
</script>

<style lang='scss' scoped>
.user {
    height: 90%;
    padding-bottom: 20px;
    overflow: hidden;
    &-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    &-content {
        height: 100%;
    }
}
</style>