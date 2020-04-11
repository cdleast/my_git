<template>
    <div class="proces-right">
        <div class="search_head">流程快速查询</div>
        <div class="search_div">
            <el-input autosize size="small" placeholder="关键字" clearable v-model="search"></el-input>
            <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
        </div>
        <div class="search_list_head">
            常用流程
            <i @click="editProcess" class="el-icon-edit"></i>
        </div>
        <ul class="search_list">
            <li :class="isDele?'active':''">
                出差报销单（自主立项课题）
                <i v-show="isDele" @click="deleteProcess" class="el-icon-close"></i>
            </li>
            <li :class="isDele?'active':''">
                借款申请单（自主立项课题）
                <i v-show="isDele" @click="deleteProcess" class="el-icon-close"></i>
            </li>
            <li :class="isDele?'active':''">
                费用报销单（自主立项课题）
                <i v-show="isDele" @click="deleteProcess" class="el-icon-close"></i>
            </li>
            <li :class="isDele?'active':''">
                支票汇票申请单（自主立项课题）
                <i v-show="isDele" @click="deleteProcess" class="el-icon-close"></i>
            </li>
            <li :class="isDele?'active':''">
                出差报销单（自主立项课题）
                <i v-show="isDele" @click="deleteProcess" class="el-icon-close"></i>
            </li>
            <li :class="isDele?'active':''">
                借款申请单（自主立项课题）
                <i v-show="isDele" @click="deleteProcess" class="el-icon-close"></i>
            </li>
            <li :class="isDele?'active':''">
                费用报销单（自主立项课题）
                <i v-show="isDele" @click="deleteProcess" class="el-icon-close"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "proces-right",
    data() {
        return {
            search: "", // 查询
            isDele: false
        };
    },
    methods: {
        // 查询
        onSubmit() {
            console.log("查询");
        },
        // 编辑流程
        editProcess() {
            if (this.isDele) {
                this.isDele = false;
            } else {
                this.isDele = true;
            }
        },
        // 删除流程
        deleteProcess() {
            console.log("删除流程");
        }
    }
};
</script>

<style lang='scss' scoped>
.search_head {
    font-size: 14px;
    color: #191c3d;
    line-height: 30px;
    font-weight: 700;
    border-bottom: 1px solid #ededed;
}
.search_div {
    height: 32px;
    margin: 20px 0;
}
.search_div .el-input {
    width: 230px;
    float: left;
}
.search_div .el-button {
    float: right;
}

// 查询下方常用流程
.search_list_head {
    font-size: 14px;
    color: #191c3d;
    font-weight: 700;
    line-height: 40px;
}
.search_list_head i {
    float: right;
    margin-top: 13px;
}
.search_list li {
    font-size: 12px;
    color: #454a5b;
    text-align: center;
    background: #f9fafc;
    border-radius: 15px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    cursor: pointer;
    position: relative;
}
.search_list li i {
    position: absolute;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
}
.search_list li.active,
.search_list li:hover {
    background-image: linear-gradient(-57deg, #48caec 0%, #4d89fe 100%);
    box-shadow: 0 4px 5px 0 rgba(75, 166, 246, 0.3);
    color: #fff;
}
.search_list li.active i {
    color: #f56c6c;
}
</style>