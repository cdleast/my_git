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
                    <el-form-item label="全宗号" prop="HEZL_QZH">
                        <el-input clearable :disabled="true" v-model="ruleForm.HEZL_QZH"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="全宗名" prop="HEZL_QZM">
                        <el-input clearable :disabled="true" v-model="ruleForm.HEZL_QZM"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="档号" prop="HEZL_DH">
                        <el-input clearable :disabled="true" v-model="ruleForm.HEZL_DH"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="年度" prop="HEZL_ND">
                        <el-select v-model="ruleForm.HEZL_ND" placeholder="选择年份">
                            <el-option
                                v-for="item in NDOPT"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="归档部门" prop="HEZL_GDBM">
                        <el-input
                            readonly="readonly"
                            @click.native="dialog_GDBM = true"
                            clearable
                            v-model="ruleForm.HEZL_GDBM"
                            class="onColor"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="保管期限" prop="HEZL_BGQX">
                        <el-select v-model="ruleForm.HEZL_BGQX" placeholder="选择期限">
                            <el-option
                                v-for="item in BGQXOPT"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="密级" prop="HEZL_MJ">
                        <el-select v-model="ruleForm.HEZL_MJ" placeholder="选择密级">
                            <el-option
                                v-for="item in MKOPT"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="是否公开" prop="HEZL_SFGK">
                        <el-radio-group class="radioBorder" v-model="ruleForm.HEZL_SFGK">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="2">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="题名" prop="HEZL_TM">
                        <el-input clearable v-model="ruleForm.HEZL_TM"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="合同相关方" prop="HEZL_HTXGF">
                        <el-input clearable v-model="ruleForm.HEZL_HTXGF"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="所属项目" prop="HEZL_SSXM">
                        <el-input clearable v-model="ruleForm.HEZL_SSXM"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="责任者" prop="HEZL_ZEZ">
                        <el-input
                            readonly="readonly"
                            @click.native="dialog_ZRZ = true"
                            clearable
                            v-model="ruleForm.HEZL_ZRZ"
                            class="onColor"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="档案目录" prop="HEZL_DNML">
                        <el-input
                            readonly="readonly"
                            @click.native="dialog_DNML = true"
                            clearable
                            v-model="ruleForm.HEZL_DNML"
                            class="onColor"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="盒号" prop="HEZL_HH">
                        <el-input clearable v-model="ruleForm.HEZL_HH"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="签订时间" prop="HEZL_QDSJ">
                        <el-input clearable v-model="ruleForm.HEZL_QDSJ"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="合同总金额" prop="HEZL_HTZJE">
                        <el-input clearable v-model="ruleForm.HEZL_HTZJE"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <div class="upload-some">
            <div class="upload-header">原文信息</div>
        </div>

        <!-- 弹窗部分 -->
        <el-dialog title="归档部门" :visible.sync="dialog_GDBM" width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog_GDBM = false">取 消</el-button>
                <el-button type="primary" @click="dialog_GDBM = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="责任者" :visible.sync="dialog_ZRZ" width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog_ZRZ = false">取 消</el-button>
                <el-button type="primary" @click="dialog_ZRZ = false">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="档案目录" :visible.sync="dialog_DNML" width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog_DNML = false">取 消</el-button>
                <el-button type="primary" @click="dialog_DNML = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import procesChildBarnav from "@/views/proces/proces-child-barnav";
import rules from "@/utils/rules/index";
// 年度
const NDOPT = [
    {
        value: "选项1",
        label: "2016"
    },
    {
        value: "选项2",
        label: "2017"
    },
    {
        value: "选项3",
        label: "2018"
    },
    {
        value: "选项4",
        label: "2019"
    },
    {
        value: "选项5",
        label: "2020"
    }
];
// 保管期限
const BGQXOPT = [
    {
        value: "选项1",
        label: "10年"
    },
    {
        value: "选项2",
        label: "30年"
    },
    {
        value: "选项3",
        label: "永久"
    }
];
// 密级
const MKOPT = [
    {
        value: "选项1",
        label: "普通"
    },
    {
        value: "选项2",
        label: "商业秘密"
    },
    {
        value: "选项3",
        label: "秘密"
    },
    {
        value: "选项4",
        label: "机密"
    },
    {
        value: "选项5",
        label: "绝密"
    }
];
export default {
    name: "hetongzhulu",
    components: {
        procesChildBarnav
    },
    data() {
        return {
            ruleForm: {
                HEZL_QZH: "SCGF", // 全宗号
                HEZL_QZM: "北京首创股份有限公司", // 全宗名
                HEZL_DH: "", // 档号
                HEZL_ND: "2020", // 年度
                HEZL_GDBM: "", // 归档部门
                HEZL_BGQX: "10年", // 保管期限
                HEZL_MJ: "商业秘密", // 密级
                HEZL_SFGK: 2, // 是否公开
                HEZL_TM: "", // 题名
                HEZL_HTXGF: "", // 合同相关方
                HEZL_SSXM: "", // 所属项目
                HEZL_ZRZ: "", // 责任者
                HEZL_DNML: "", // 档案目录
                HEZL_HH: "", // 盒号
                HEZL_QDSJ: "", // 签订时间
                HEZL_HTZJE: "" // 合同总金额
            },
            rules, // 验证规则
            NDOPT, // 年度下拉
            BGQXOPT, // 保管期限下拉
            MKOPT, // 密级下拉
            dialog_GDBM: false, // 归档部门弹窗
            dialog_ZRZ: false, // 责任者弹窗
            dialog_DNML: false // 档案目录弹窗
        };
    },
    methods: {
        OPEGDBM() {
            console.log(111);
        },
        OPENZRZ() {
            console.log(222);
        }
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

.ruleForm /deep/ .onColor input {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: pointer;
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