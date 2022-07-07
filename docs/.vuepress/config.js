const { defaultTheme } = require("vuepress");
const { searchPlugin } = require("@vuepress/plugin-search");
module.exports = {
  lang: "zh-CN",
  title: "油猴开发指南",
  description: "以凡人之軀領悟神之意志",
  theme: defaultTheme({
    navbar: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "指南",
        link: "/guide/",
      },
      { text: "论坛", link: "https://bbs.tampermonkey.net.cn/" },
      { text: "脚本站", link: "https://scriptcat.org/" },
      { text: "Gtihub", link: "https://www.baidu.com" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "开篇前言",
          link: "/guide/",
          children: [],
        },
      ],
    },
  }),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索内容",
        },
      },
    }),
  ],
};
