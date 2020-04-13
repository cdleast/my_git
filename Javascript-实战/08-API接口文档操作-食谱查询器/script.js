// 获取节点
const search = document.getElementById("search"); // 输入框
const submit = document.getElementById("submit"); // 查询按钮
const random = document.getElementById("random"); // 随机食谱的按钮
const mealsEl = document.getElementById("meals"); // 查询结果显示的父级
const resultHeading = document.getElementById("result-heading"); // 显示结果的标题
const single_mealEl = document.getElementById("single-meal"); // 单个食谱显示


// 设置事件监听
submit.addEventListener("submit", searchMeal);
mealsEl.addEventListener("click", getMealsEl);
random.addEventListener("click", getRandomMeal);


// 输入框提交事件-通过feach api获得食谱数据
function searchMeal(e) {
    e.preventDefault(); // 组织默认事件
    single_mealEl.innerHTML = ""; // 清空单个食谱显示的内容
    const term = search.value;// 获得search 输入框的值

    // 检查是否为空
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                resultHeading.innerHTML = `<h2>${term}的查询结果为：</h2>`;
                if (data.meals === null) {
                    resultHeading.innerHTML = `<p>没有查询到相关食谱，请重新输入！</p>`;
                } else {
                    mealsEl.innerHTML = data.meals.map(meal => `
                        <div class="meal">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                            <div class="meal-info" data-mealId = "${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>
                            </div>
                        </div>
                    `).join("");
                }
            });
        search.value = ""; // 清空search
    } else {
        alert("请输入搜索的内容");
    }
}


// 查询结果显示的父级
// e.path.find 获取我们点击的元素的id
function getMealsEl(e) {
    const mealInfo = e.path.find(item => {
        // 判断item是否有class类名，且包含meal-info类名
        if (item.classList) {
            return item.classList.contains("meal-info");
        } else {
            return false; // 不包含结束操作
        }
    });
    if (mealInfo) {
        // 创建变量存储我们用data属性设置的ID
        // getAttribute() 方法返回指定属性名的属性值-返回data-mealid的ID值
        const mealID = mealInfo.getAttribute("data-mealid");

        // 根据ID查询菜谱详细信息
        getMealById(mealID);
    }
}


// 根据ID查询菜谱详细信息
function getMealById(mealID) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];
            addMealToDOM(meal); // 把数据插入到DOM节点中
        });
}


// 把数据插入到DOM节点中
function addMealToDOM(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(
                `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
            );
        } else {
            break;
        }
    }

    // 插入HTML
    single_mealEl.innerHTML = `
        <div class="single-meal">
            <h1>${meal.strMeal}</h1>
            <img src= "${meal.strMealThumb}" alt="${meal.strmeal}">
            <div class="single-meal-info">
                ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ""}
                ${meal.strArea ? `<p>${meal.strArea}</p>` : ""}
            </div>
            <div class="main">
                <p>${meal.strInstructions}</p>
                <h2>Ingredients</h2>
                <ul>
                    ${ingredients.map(ing => `<li>${ing}</li>`).join("")}
                </ul>
            </div>
        </div>
    `;
}


// 随机显示菜谱
function getRandomMeal() {
    // 输入框和显示结果都清空
    mealsEl.innerHTML = "";
    resultHeading.innerHTML = "";

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];
            addMealToDOM(meal); // 把数据插入到DOM节点中
        });
}