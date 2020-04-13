// 获取节点
const wordEl = document.getElementById("word"); // 单词输入内容
const wrongLettersEl = document.getElementById("wrong-letters"); // 错误提示
const playAgainBtn = document.getElementById("play-button"); // 再玩一次
const popup = document.getElementById("popup-container"); // 弹出框
const notification = document.getElementById("notification-container"); // 通知框
const finalMessage = document.getElementById("final-message"); // 弹出框里胜利或者失败提示
const figureParts = document.querySelectorAll(".figure-part"); // 火柴人数组
const words = ["application", "programming", "interface", "wonder"]; // 需要进行猜测的单词
let selectedWord = words[Math.floor(Math.random() * words.length)]; // 随机选择单词
const correctLetters = []; // 正确字母存放的数组
const wrongLetters = []; // 错误数组存放的数组


// 显示单词函数
// selectedWord.split("") 将随机单词以字母形式组成数组
// 如果correctLetters包含letter里面的字母就显示，否则显示空
function displayWord() {
	wordEl.innerHTML = `
	${selectedWord.split("").map(letter =>
		`
		<span class="letter">
        ${correctLetters.includes(letter) ? letter : ""}
        </span>
        `
	).join("")}
	`;

	// 清除换行符
	const innerWord = wordEl.innerText.replace(/\n/g, "");

	// 用户输入单词正确提示语
	if (innerWord === selectedWord) {
		finalMessage.innerText = "恭喜你输入正确！ 😃";
		popup.style.display = "flex";
	}
}
displayWord();


// 按下键盘中的字母的事件监听
window.addEventListener("keydown", e => {
	// 65-90是a-z，其他的不触发
	if (e.keyCode >= 65 && e.keyCode <= 90) {
		// 存储用户按下键盘获得的字母
		const letter = e.key;

		// 判断用户按下的字母是否存在selectedWord中
		if (selectedWord.includes(letter)) {
			// 判断正确字母，用户按下的这个字母不存在correctLetters(正确字母的数组)数组当中
			if (!correctLetters.includes(letter)) {
				// 不存在就加入
				correctLetters.push(letter);
				displayWord(); // 调用显示单词函数
			} else {
				// 如果correctLetters(正确字母的数组)数组中有显示提示正确数组中有了
				showNotification(); // 显示正确数组重复提示框
			}
		} else {
			// 判断错误字母
			if (!wrongLetters.includes(letter)) {
				wrongLetters.push(letter);
				updateWrongLettersEl(); // 错误单词显示在页面当中
			} else {
				showNotification(); // 显示正确数组重复提示框
			}
		}
	}
});


// 显示正确数组重复提示框，数组中已经有用户按下的字母
function showNotification() {
	notification.classList.add("show"); // 添加显示类名
	// 3秒后消失
	setTimeout(() => {
		notification.classList.remove("show");
	}, 3000);
}


// 错误单词显示在页面当中
function updateWrongLettersEl() {
	// 显示错误字母
	wrongLettersEl.innerHTML = `
	 ${wrongLetters.length > 0 ? "<p>错误</p>" : ""}
	 ${wrongLetters.map(letter => `<span>${letter}</span>`)}
   `;

	// 显示火柴人身体
	figureParts.forEach((part, index) => {
		const errors = wrongLetters.length; // 用户输入错误的次数
		if (index < errors) {
			part.style.display = "block";
		} else {
			part.style.display = "none";
		}
	});


	// 机会用完显示弹出框
	if (wrongLetters.length === figureParts.length) {
		finalMessage.innerText = "抱歉输入错误，游戏结束. 😕";
		popup.style.display = "flex";
	}
}


// 在玩一次
playAgainBtn.addEventListener("click", () => {
	// 清空正确字母数组和错误字母数组
	correctLetters.splice(0);
	wrongLetters.splice(0);

	// 重新产生随机单词
	selectedWord = words[Math.floor(Math.random() * words.length)];

	// 显示单词函数
	displayWord();

	// 错误单词显示在页面当中
	updateWrongLettersEl();

	// 隐藏在玩一次模态框
	popup.style.display = "none";
});
