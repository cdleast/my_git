export default {
    rules: {
        // 档案管理-合同著录
        HEZL_QZH: [
            { required: true, message: "全宗号不能为空", trigger: "blur" }
        ],
        HEZL_QZM: [
            { required: true, message: "全宗名不能为空", trigger: "blur" }
        ],
        HEZL_DH: [
            { message: "档号不能为空", trigger: "blur" }
        ],
        HEZL_ND: [
            { required: true, message: "年度不能为空", trigger: "blur" }
        ],
        HEZL_GDBM: [
            { message: "归档部门不能为空", trigger: "blur" }
        ],
        HEZL_BGQX: [
            { required: true, message: "保管期限不能为空", trigger: "blur" }
        ],
        HEZL_MJ: [
            { required: true, message: "密级不能为空", trigger: "blur" }
        ],
        HEZL_SFGK: [
            { message: "是否公开不能为空", trigger: "blur" }
        ],
        HEZL_TM: [
            { required: true, message: "题名不能为空", trigger: "blur" }
        ],
        HEZL_HTXGF: [
            { message: "合同相关方不能为空", trigger: "blur" }
        ],
        HEZL_SSXM: [
            { message: "所属项目不能为空", trigger: "blur" }
        ],
        HEZL_ZRZ: [
            { message: "责任者不能为空", trigger: "blur" }
        ],
        HEZL_DNML: [
            { required: true, message: "档案目录不能为空", trigger: "blur" }
        ],
        HEZL_HH: [
            { message: "盒号不能为空", trigger: "blur" }
        ],
        HEZL_QDSJ: [
            { message: "签订时间不能为空", trigger: "blur" }
        ],
        HEZL_HTZJE: [
            { message: "合同总金额不能为空", trigger: "blur" }
        ]
    }
}