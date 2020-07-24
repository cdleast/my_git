<template>
    <div class="user">
        <div class="user-header">
            <el-button type="primary" @click="addUser">+ 新增</el-button>
            <common-form inline :form="searchFrom" :formLabel="formLabel">
                <el-button type="primary" @click="getList(searchFrom.keyword)">搜索</el-button>
            </common-form>
        </div>

        <div class="user-content">
            <common-table></common-table>
        </div>
    </div>
</template>

<script>
import CommonForm from "@/components/global/CommonForm";
import CommonTable from "@/components/global/CommonTable";
export default {
    name: "user",
    components: {
        CommonForm,
        CommonTable
    },
    data() {
        return {
            searchFrom: {
                keyword: ""
            },
            // form表单label部分
            formLabel: [
                {
                    model: "keyword",
                    label: ""
                }
            ]
        };
    },
    methods:{
        // 新增
        addUser(){

        },
        // 搜索
        getList(){

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
}
</style>