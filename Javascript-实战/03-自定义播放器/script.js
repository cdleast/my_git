const video = document.getElementById("video"); // video视频
const play = document.getElementById("play"); // 播放按钮
const stop = document.getElementById("stop"); // 暂停按钮
const progress = document.getElementById("progress"); // 进度条
const timestamp = document.getElementById("timestamp"); // 时间戳


// 添加事件监听 - 
play.addEventListener("click", toggleVideoStatus); // 视频播放或者暂停切换事件
stop.addEventListener("click", stopVideo); // 暂停事件
progress.addEventListener("change", setVideoProgress); // 进度条拖动事件

video.addEventListener("click", toggleVideoStatus); // 视频播放或者暂停切换事件
video.addEventListener("pause", updatePlayIcon); // 暂停状态下图标变化
video.addEventListener("play", updatePlayIcon); // 播放状态下图标变化
video.addEventListener("timeupdate", updateProgress); // 进度条变化


// 点击播放或者暂停
function toggleVideoStatus() {
    // video.paused是video设置好的状态属性，表示暂停
    if (video.paused) {
        video.play(); // 视频播放
    } else {
        video.pause(); // 视频暂停
    }
}


// 点击播放或者暂停图标更新
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}


// 进度条变化
// video.currentTime 当前播放时间
// video.duration 视频总时长
function updateProgress() {
    // 设置进度条长度
    progress.value = (video.currentTime / video.duration) * 100;

    // 获取分钟数
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = "0" + String(mins);
    }

    //  获取秒数
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = "0" + String(secs);
    }

    // 设置时间戳
    timestamp.innerHTML = `${mins}:${secs}`;
}


// 停止视频
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}


// 拖动进度条的时候改变播放内容和时间戳
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

