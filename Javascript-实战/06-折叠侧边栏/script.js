// 获取节点
const toggle = document.getElementById("toggle"); // 切换显示侧边栏按钮
const modal = document.getElementById("modal"); // 登录模态框
const open = document.getElementById("open"); // 打开登录模态框按钮
const close = document.getElementById("close"); // 关闭登录模态框按钮


// 切换显示侧边栏
toggle.addEventListener("click", () =>
	document.body.classList.toggle("show-nav")
);


// 打开登录模态框
open.addEventListener("click", () => modal.classList.add("show-modal"));


// 关闭模态框
close.addEventListener("click", () => modal.classList.remove("show-modal"));


// 点击阴影部分关闭模态框
window.addEventListener("click", e =>
	e.target == modal ? modal.classList.remove("show-modal") : false
);