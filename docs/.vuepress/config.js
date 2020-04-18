module.exports = {
  base:'/vuepress/',
  title: "Tien VuePress",
  description: 'Keep hungry, Keep foolish',
  head: [
    ['meta', { name: 'author', content: 'Tien' }],
    ['meta', { name: 'keywords', content: 'vuepress,Tien,vuepress介绍' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '/assets/img/logo.png',
    sidebar: [
      'about/'
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },

      {
        text: 'Web',
        ariaLabel: 'Web Menu',
        items: [
          { text: 'JavaScript', link: '/web/javascript/' },
          { text: 'Css', link: '/web/css/' }
        ]
      },
      {
        text: 'Languages',
        items: [
          {
            text: 'Group1',
            items: [
              { text: 'JavaScript', link: '/web/javascript/' },
              { text: 'Css', link: '/web/css/' }
            ]
          },
          {
            text: 'Group2',
            items: [
              { text: 'JavaScript', link: '/web/javascript/' },
              { text: 'Css', link: '/web/css/' }
            ]
          }
        ]
      },

      { text: 'Github', link: 'https://baidu.com' },
    ]
  }
}