// 页面配置：添加作者、代码仓库和视频时，只需修改这里。
window.RECURSIA_CONFIG = {
  authors: [], // 例如 [{ name: "Your Name", url: "https://your-homepage.com" }]
  codeUrl: "", // 论文代码仓库的链接；暂不显示无地址的按钮。
  videos: {
    task1: { src: "assets/videos/T1.mp4", poster: "assets/posters/T1.jpg", durationSeconds: 61.266667, captions: "" },
    task2: { src: "assets/videos/T2.mp4", poster: "assets/posters/T2.jpg", durationSeconds: 54.533333, captions: "" },
    task3: { src: "assets/videos/T3.mp4", poster: "assets/posters/T3.jpg", durationSeconds: 52.133333, captions: "" }
  }
};
// index.html 内置同一组视频，关闭 JavaScript 时仍可播放。
// 更换视频时，同步更新 HTML 的无 JavaScript 回退内容和录制时长。
// captions 可选，填写英文 WebVTT 字幕文件路径；视频也支持 HTTPS 直链。
