export default [
    {
        path: '/proces', redirect: '/danganguanli', meta: { title: '流程中心' }, name: 'proces', component: () => import('@/views/proces'), children: [
            { path: '/danganguanli', meta: { title: '档案管理', activeParent: '/proces', activeChild: '/danganguanli' }, name: 'danganguanli', component: () => import('@/components/proces/danganguanli') },
            { path: '/huiyiguanli', meta: { title: '会议管理', activeParent: '/proces', activeChild: '/huiyiguanli' }, name: 'huiyiguanli', component: () => import('@/components/proces/huiyiguanli') },
            { path: '/yinzhangzhengzhaoguanli', meta: { title: '印章证照管理', activeParent: '/proces', activeChild: '/yinzhangzhengzhaoguanli' }, name: 'yinzhangzhengzhaoguanli', component: () => import('@/components/proces/yinzhangzhengzhaoguanli') },
            { path: '/gongwenguanli', meta: { title: '公文管理', activeParent: '/proces', activeChild: '/gongwenguanli' }, name: 'gongwenguanli', component: () => import('@/components/proces/gongwenguanli') },
            { path: '/yewubanli', meta: { title: '业务办理', activeParent: '/proces', activeChild: '/yewubanli' }, name: 'yewubanli', component: () => import('@/components/proces/yewubanli') },
            { path: '/gongchengguanli', meta: { title: '工程管理', activeParent: '/proces', activeChild: '/gongchengguanli' }, name: 'gongchengguanli', component: () => import('@/components/proces/gongchengguanli') },
            { path: '/richangshiwu', meta: { title: '日常事务', activeParent: '/proces', activeChild: '/richangshiwu' }, name: 'richangshiwu', component: () => import('@/components/proces/richangshiwu') },
            { path: '/renshiliucheng', meta: { title: '人事流程', activeParent: '/proces', activeChild: '/renshiliucheng' }, name: 'renshiliucheng', component: () => import('@/components/proces/renshiliucheng') },
            { path: '/gerenshezhi', meta: { title: '个人设置', activeParent: '/proces', activeChild: '/gerenshezhi' }, name: 'gerenshezhi', component: () => import('@/components/proces/gerenshezhi') },
            { path: '/cheliangguanli', meta: { title: '车辆管理', activeParent: '/proces', activeChild: '/cheliangguanli' }, name: 'cheliangguanli', component: () => import('@/components/proces/cheliangguanli') },
            { path: '/menhuchangyonggongneng', meta: { title: '门户常用功能', activeParent: '/proces', activeChild: '/menhuchangyonggongneng' }, name: 'menhuchangyonggongneng', component: () => import('@/components/proces/menhuchangyonggongneng') },
            { path: '/menhuyemian', meta: { title: '门户页面', activeParent: '/proces', activeChild: '/menhuyemian' }, name: 'menhuyemian', component: () => import('@/components/proces/menhuyemian') },
            { path: '/menhugongweiguanli', meta: { title: '门户工位管理', activeParent: '/proces', activeChild: '/menhugongweiguanli' }, name: 'menhugongweiguanli', component: () => import('@/components/proces/menhugongweiguanli') },
            { path: '/menhuyuzhixingli', meta: { title: '门户与知行力', activeParent: '/proces', activeChild: '/menhuyuzhixingli' }, name: 'menhuyuzhixingli', component: () => import('@/components/proces/menhuyuzhixingli') },
            { path: '/menhuxinxifabu', meta: { title: '门户信息发布', activeParent: '/proces', activeChild: '/menhuxinxifabu' }, name: 'menhuxinxifabu', component: () => import('@/components/proces/menhuxinxifabu') },
            { path: '/menhuluntanguanli', meta: { title: '门户论坛管理', activeParent: '/proces', activeChild: '/menhuluntanguanli' }, name: 'menhuluntanguanli', component: () => import('@/components/proces/menhuluntanguanli') },
            { path: '/bangongyongpinguanli', meta: { title: '办公用品管理', activeParent: '/proces', activeChild: '/bangongyongpinguanli' }, name: 'bangongyongpinguanli', component: () => import('@/components/proces/bangongyongpinguanli') },
            { path: '/zichanguanli', meta: { title: '资产管理', activeParent: '/proces', activeChild: '/zichanguanli' }, name: 'zichanguanli', component: () => import('@/components/proces/zichanguanli') },
            { path: '/baoxiaoguanli1', meta: { title: '报销管理1', activeParent: '/proces', activeChild: '/baoxiaoguanli1' }, name: 'baoxiaoguanli1', component: () => import('@/components/proces/baoxiaoguanli1') },
            { path: '/baoxiaoguanli2', meta: { title: '报销管理2', activeParent: '/proces', activeChild: '/baoxiaoguanli2' }, name: 'baoxiaoguanli2', component: () => import('@/components/proces/baoxiaoguanli2') },
            { path: '/zijinguanli', meta: { title: '资金管理', activeParent: '/proces', activeChild: '/zijinguanli' }, name: 'zijinguanli', component: () => import('@/components/proces/zijinguanli') },
            { path: '/gudingzichanguanli', meta: { title: '固定资产管理', activeParent: '/proces', activeChild: '/gudingzichanguanli' }, name: 'gudingzichanguanli', component: () => import('@/components/proces/gudingzichanguanli') },
            { path: '/shichangchuanbo', meta: { title: '市场传播', activeParent: '/proces', activeChild: '/shichangchuanbo' }, name: 'shichangchuanbo', component: () => import('@/components/proces/shichangchuanbo') },
            { path: '/yingyongpingtai', meta: { title: '应用平台', activeParent: '/proces', activeChild: '/yingyongpingtai' }, name: 'yingyongpingtai', component: () => import('@/components/proces/yingyongpingtai') },
            { path: '/biaoqianziliaozhunbei', meta: { title: '标前资料准备', activeParent: '/proces', activeChild: '/biaoqianziliaozhunbei' }, name: 'biaoqianziliaozhunbei', component: () => import('@/components/proces/biaoqianziliaozhunbei') },
            { path: '/xitongshezhi', meta: { title: '系统设置', activeParent: '/proces', activeChild: '/xitongshezhi' }, name: 'xitongshezhi', component: () => import('@/components/proces/xitongshezhi') },

        ]
    }
]