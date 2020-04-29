module.exports = [
  { text: "主页", link: "/" },
  {
    text: "前端",
    items: [
      { text: "JavaScript", link: "/web/javascript/" },
      { text: "Webpack", link: "/web/webpack/" },
      { text: "CSS", link: "/web/css/" },
      {
        text: "前端框架",
        items: [
          { text: "Vue", link: "/web/framework/vue/" },
          // { text: "Angular", link: "/web/framework/angular/" }
        ]
      }
    ]
  },

  {
    text: "组件文档", link: "/components/",
  },

  {
    text: "工具",
    items: [
      {
        text: "开发工具",
        items: [
          { text: "VsCode", link: "/tools/ide/" },
          // { text: "WebStorm", link: "/tools/ide/webstorm/" }
        ],
      },
      {
        text: "效率工具",
        items: [
          { text: "iTerm2", link: "/tools/others/iterm2/" },
          { text: "Markdown", link: "/tools/others/markdown/" }
        ]
      }
    ]
  },

  {
    text: "Github",
    link: "https://github.com/TienOUC",
  }
]
