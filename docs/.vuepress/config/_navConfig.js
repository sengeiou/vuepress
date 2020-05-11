module.exports = [
  { text: "主页", link: "/" },
  {
    text: "前端",
    items: [
      { text: "JavaScript", link: "/pages/web/javascript/" },
      { text: "Webpack", link: "/pages/web/webpack/" },
      { text: "CSS", link: "/pages/web/css/" },
      {
        text: "前端框架",
        items: [
          { text: "Vue", link: "/pages/web/framework/vue/" },
        ],
      },
    ],
  },
  {
    text: "组件文档",
    link: "/pages/components/",
  },
  {
    text: "工具",
    items: [
      {
        text: "开发工具",
        items: [
          { text: "VsCode", link: "/pages/tools/ide/" },
        ],
      },
      {
        text: "效率工具",
        items: [
          { text: "iTerm2", link: "/pages/tools/others/iterm2/" },
          { text: "Markdown", link: "/pages/tools/others/markdown/" },
        ],
      },
    ],
  },
  {
    text: '时间线', link: '/pages/timeline/', icon: 'reco-date'
  },
  {
    text: "Github",
    link: "https://github.com/TienOUC",
    icon: "reco-github"
  },
]
