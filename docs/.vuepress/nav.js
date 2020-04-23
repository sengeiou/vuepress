module.exports = [
  { text: "主页", link: "/" },
  {
    text: "前端",
    items: [
      {
        text: "JavaScript",
        items: [
          { text: "ES6", link: "/web/javascript/" },
          { text: "Notes", link: "/web/javascript1/" },
        ],
      },
      {
        text: "Webpack",
        items: [
          { text: "4.0", link: "/web/webpack/" },
        ],
      },
      {
        text: "Css",
        items: [
          { text: "Demo", link: "/web/css/" },
          { text: "Notes", link: "/web/css1/" },
        ],
      },
    ]
    // items: [
    //   { text: "JavaScript", link: "/web/javascript/" },
    //   { text: "Webpack", link: "/web/webpack/" },
    //   { text: "Css", link: "/web/css/" }

    // ]
  },
  {
    text: "组件",
    items: [
      { text: "Ti-ui", link: "/components/tiui/" },
      { text: "Data", link: "/components/data/" }
    ]

    // items: [
    //   {
    //     text: "Basic",
    //     items: [
    //       { text: "item1", link: "/components/ti-ui" },
    //       { text: "item2", link: "/components/basic/item2/" },
    //     ],
    //   },
    //   {
    //     text: "Form",
    //     items: [
    //       { text: "item1", link: "/components/form/item1/" },
    //       { text: "item2", link: "/components/form/item2/" },
    //     ],
    //   },
    // ]
  },
  {
    text: "工具",
    items: [
      {
        text: "IDE",
        items: [
          { text: "WebStorm", link: "/components/basic/item1/" },
          { text: "vsCode", link: "/components/basic/item2/" },
        ],
      },
      {
        text: "Others",
        items: [
          { text: "iTerm2", link: "/components/basic/item3/" }
        ],
      }
    ]
  },
  {
    text: "Github",
    link: "https://github.com/TienOUC",
  },

  // {
  //   // text: "About", link: "/about/"
  //   // items: [
  //   //   {
  //   //     text: "About", link: "/about/"
  //   //   }
  //   // ]
  // }
];
