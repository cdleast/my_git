const rules = {
    // 合同著录
    FONDS_ID: [
        { required: true, message: "全宗号不能为空", trigger: "blur" }
    ],
    FONDS_NAME: [
        { required: true, message: "全宗名不能为空", trigger: "blur" }
    ],
    DA_CODE: [
        { required: true, message: "档号不能为空", trigger: "blur" }
    ],
    DA_YEAR: [
        { required: true, message: "年度不能为空", trigger: "blur" }
    ],
    DEPT_NAME: [
        { required: true, message: "归档部门不能为空", trigger: "blur" }
    ],
    DA_TERM: [
        { required: true, message: "保管期限不能为空", trigger: "blur" }
    ],
    ARCH_SECRET: [
        { required: true, message: "密级不能为空", trigger: "blur" }
    ],
    CT_STIME: [
        { required: true, message: "是否公开不能为空", trigger: "blur" }
    ],
    ARCH_TITLE: [
        { required: true, message: "题名不能为空", trigger: "blur" }
    ],
    CT_UNIT: [
        { required: true, message: "合同相关方不能为空", trigger: "blur" }
    ],
    CT_PROJ: [
        { required: true, message: "所属项目不能为空", trigger: "blur" }
    ],
    DUTY_NAME: [
        { required: true, message: "责任者不能为空", trigger: "blur" }
    ],
    ID_NAME: [
        { required: true, message: "档案目录不能为空", trigger: "blur" }
    ],
    BOX_NUM: [
        { required: true, message: "盒号不能为空", trigger: "blur" }
    ],
    FONDS_ID: [
        { required: true, message: "签订时间不能为空", trigger: "blur" }
    ],
    CT_EMONEY: [
        { required: true, message: "合同总金额不能为空", trigger: "blur" }
    ]
}

export default rules