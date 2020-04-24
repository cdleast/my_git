<template>
    <div class="hetongzhulu">
        <procesChildBarnav :childText="$router.currentRoute"></procesChildBarnav>
        <div class="redHeader-container">
            <p>北京首创股份有限公司</p>
            <p>{{$router.currentRoute.meta.title}}</p>
        </div>
        <el-form
            class="ruleForm"
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-width="100px"
        >
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="全宗号" prop="FONDS_ID">
                        <el-input v-model="ruleForm.FONDS_ID"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="全宗名" prop="FONDS_NAME">
                        <el-input v-model="ruleForm.FONDS_NAME"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="档号" prop="DA_CODE">
                        <el-input v-model="ruleForm.DA_CODE"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="年度" prop="DA_YEAR">
                        <el-input v-model="ruleForm.DA_YEAR"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="归档部门" prop="DEPT_NAME">
                        <el-input v-model="ruleForm.DEPT_NAME"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="保管期限" prop="DA_TERM">
                        <el-input v-model="ruleForm.DA_TERM"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="密级" prop="ARCH_SECRET">
                        <el-input v-model="ruleForm.ARCH_SECRET"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="是否公开" prop="CT_STIME">
                        <el-input v-model="ruleForm.CT_STIME"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="题名" prop="ARCH_TITLE">
                        <el-input v-model="ruleForm.ARCH_TITLE"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="合同相关方" prop="CT_UNIT">
                        <el-input v-model="ruleForm.CT_UNIT"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="所属项目" prop="CT_PROJ">
                        <el-input v-model="ruleForm.CT_PROJ"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="责任者" prop="DUTY_NAME">
                        <el-input v-model="ruleForm.DUTY_NAME"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="档案目录" prop="ID_NAME">
                        <el-input v-model="ruleForm.ID_NAME"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="盒号" prop="BOX_NUM">
                        <el-input v-model="ruleForm.BOX_NUM"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="签订时间" prop="FONDS_ID">
                        <el-input v-model="ruleForm.FONDS_ID"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="合同总金额" prop="CT_EMONEY">
                        <el-input v-model="ruleForm.CT_EMONEY"></el-input>
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
import rules from "@/utils/rules/index";
export default {
    name: "hetongzhulu",
    components: {
        procesChildBarnav
    },
    data() {
        return {
            ruleForm: {
                FONDSID: "", // 全宗号
                FONDS_NAME: "", // 全宗名
                DA_CODE: "", // 档号
                DA_YEAR: "", // 年度
                DEPT_NAME: "", // 归档部门
                DA_TERM: "", // 保管期限
                ARCH_SECRET: "", // 密级
                IS_PUBLIC: "", // 是否公开
                ARCH_TITLE: "", // 题名
                CT_UNIT: "", // 合同相关方
                CT_PROJ: "", // 所属项目
                DUTY_NAME: "", // 责任者
                ID_NAME: "", // 档案目录
                BOX_NUM: "", // 盒号
                CT_STIME: "", // 签订时间
                CT_EMONEY: "" // 合同总金额
            },
            rules
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

.ruleForm {
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