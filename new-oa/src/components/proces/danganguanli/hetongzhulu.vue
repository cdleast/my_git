<template>
    <div class="hetongzhulu">
        <procesChildBarnav :childText="$router.currentRoute"></procesChildBarnav>
        <div class="redHeader-container">
            <p>北京首创股份有限公司</p>
            <p>{{$router.currentRoute.meta.title}}</p>
        </div>
        <el-form class="child-form" ref="form" :model="form" label-width="100px">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="全宗号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="全宗名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="档号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="年度">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="归档部门">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="保管期限">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="密级">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="是否公开">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="题名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="合同相关方">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="所属项目">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="责任者">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="档案目录">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="盒号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="签订时间">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="合同总金额">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <div class="upload-some">
            <div class="upload-header">原文信息</div>
        </div>
    </div>
</template>

<script>
import procesChildBarnav from "@/views/proces/proces-child-barnav";
export default {
    name: "hetongzhulu",
    components: {
        procesChildBarnav
    },
    data() {
        return {
            form: {
                name: ""
            }
        };
    }
};
</script>

<style lang='scss' scoped>
.redHeader-container {
    padding: 35px 0;
    font-size: 24px;
    color: #191c3d;
    letter-spacing: 0;
    text-align: center;
    line-height: 32px;
    font-weight: 700;
    background: #fff;
    border-top: 1px dashed #409eff;
    border-bottom: 1px dashed #409eff;
}

.child-form {
    padding: 30px 20px 0;
    background: #fff;
    margin-bottom: 20px;
}

.upload-some {
    background: #fff;
    margin-bottom: 20px;
}

.upload-header {
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    font-size: 14px;
    color: #191c3d;
    letter-spacing: 0;
    font-weight: 700;
}
</style>