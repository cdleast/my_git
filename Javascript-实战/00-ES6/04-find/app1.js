var users1 = [{
        copyStatus: "none",
        createTime: "2019-11-26 15:47:33",
        shareStatus: "none",
        skillCategory: "user",
        skillDesc: "",
        skillId: 11111,
        skillName: "故事1",
        skillObtainedBy: "new",
        skillStatus: "running",
        skillType: "dialogue",
        skillVersion: "",
        updateTime: "2019-11-26 15:47:33"
    },
    {
        copyStatus: "none",
        createTime: "2019-11-26 15:47:33",
        shareStatus: "none",
        skillCategory: "user",
        skillDesc: "",
        skillId: 22222,
        skillName: "故事2",
        skillObtainedBy: "new",
        skillStatus: "running",
        skillType: "dialogue",
        skillVersion: "",
        updateTime: "2019-11-26 15:47:33"
    },
    {
        copyStatus: "none",
        createTime: "2019-11-26 15:47:33",
        shareStatus: "none",
        skillCategory: "user",
        skillDesc: "",
        skillId: 33333,
        skillName: "故事3",
        skillObtainedBy: "new",
        skillStatus: "running",
        skillType: "dialogue",
        skillVersion: "",
        updateTime: "2019-11-26 15:47:33"
    },
    {
        copyStatus: "none",
        createTime: "2019-11-26 15:47:33",
        shareStatus: "none",
        skillCategory: "user",
        skillDesc: "",
        skillId: 44444,
        skillName: "故事4",
        skillObtainedBy: "new",
        skillStatus: "running",
        skillType: "dialogue",
        skillVersion: "",
        updateTime: "2019-11-26 15:47:33"
    }, {
        copyStatus: "none",
        createTime: "2019-11-26 15:47:33",
        shareStatus: "none",
        skillCategory: "user",
        skillDesc: "",
        skillId: 55555,
        skillName: "故事5",
        skillObtainedBy: "new",
        skillStatus: "running",
        skillType: "dialogue",
        skillVersion: "",
        updateTime: "2019-11-26 15:47:33"
    }
]

var users2 = [{
        copyStatus: "none",
        createTime: "2019-11-26 15:47:33",
        shareStatus: "none",
        skillCategory: "user",
        skillDesc: "",
        skillId: 11111,
        skillName: "故事1",
        skillObtainedBy: "new",
        skillStatus: "running",
        skillType: "dialogue",
        skillVersion: "",
        updateTime: "2019-11-26 15:47:33"
    },
    {
        copyStatus: "none",
        createTime: "2019-11-26 15:47:33",
        shareStatus: "none",
        skillCategory: "user",
        skillDesc: "",
        skillId: 22222,
        skillName: "故事2",
        skillObtainedBy: "new",
        skillStatus: "running",
        skillType: "dialogue",
        skillVersion: "",
        updateTime: "2019-11-26 15:47:33"
    },
    {
        copyStatus: "none",
        createTime: "2019-11-26 15:47:33",
        shareStatus: "none",
        skillCategory: "user",
        skillDesc: "",
        skillId: 33333,
        skillName: "故事3",
        skillObtainedBy: "new",
        skillStatus: "running",
        skillType: "dialogue",
        skillVersion: "",
        updateTime: "2019-11-26 15:47:33"
    }
]


arr1 = users1.filter(item => {
    let idList = users2.map(function(v){
        return v.skillId;
    })  
    // 返回idList中包含users1 下 item.skillId的对象
    return idList.includes(item.skillId)
})

console.log(arr1)





// // 获取到 users1 的所有 id 集合
// let users1Ids = users1.map(function(item){
//     return item => item.skillId;
// });
// console.log(users1Ids)


// // 过滤 users2 中不包含 users1 相同的id数组。
// const result = users2.filter(function(item){
//     return item => !users1Ids.includes(item.skillId)
// });
// console.log(result);