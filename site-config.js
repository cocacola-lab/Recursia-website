// 页面配置：作者、机构、代码仓库和视频；静态回退内容见 index.html。
window.RECURSIA_CONFIG = {
  // 作者顺序、姓名和机构编号与当前论文首页保持一致；url 可选。
  authors: [
    { name: "Yangzhi Chen", affiliations: [1] },
    { name: "Feiran Liu", affiliations: [1] },
    { name: "Zishuo Wang", affiliations: [1] },
    { name: "Zijian Jin", affiliations: [2] },
    { name: "Xin Zhu", affiliations: [3] },
    { name: "Lecheng Ruan", affiliations: [4] },
    { name: "Wenjuan Han", affiliations: [1, 5] }
  ],
  affiliations: [
    { id: 1, name: "Beijing Jiaotong University" },
    { id: 2, name: "New York University" },
    { id: 3, name: "University of Southern California" },
    { id: 4, name: "PKU-HEC joint lab for industrial intelligence, Peking University" },
    { id: 5, name: "LingXing Tech" }
  ],
  codeUrl: "https://github.com/cocacola-lab/Recursia", // Recursia 真机实验代码仓库。
  videos: {
    task1: { src: "assets/videos/T1.mp4", poster: "assets/posters/T1.jpg", durationSeconds: 61.266667, captions: "" },
    task2: { src: "assets/videos/T2.mp4", poster: "assets/posters/T2.jpg", durationSeconds: 54.533333, captions: "" },
    task3: { src: "assets/videos/T3.mp4", poster: "assets/posters/T3.jpg", durationSeconds: 52.133333, captions: "" }
  }
};
// index.html 内置同一组视频，关闭 JavaScript 时仍可播放。
// 更换视频时，同步更新 HTML 的无 JavaScript 回退内容和录制时长。
// captions 可选，填写英文 WebVTT 字幕文件路径；视频也支持 HTTPS 直链。
// 更换作者或机构时，同步更新 index.html 的静态内容和 citation_author 元数据。
