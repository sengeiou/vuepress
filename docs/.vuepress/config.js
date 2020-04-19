module.exports = {
  base: '/vuepress/',
  title: "Tien VuePress",
  description: 'Keep hungry, Keep foolish',
  head: [
    ['meta', { name: 'author', content: 'Tien' }],
    ['meta', { name: 'keywords', content: 'vuepress,Tien,vuepress介绍' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: [
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      }
    ],
    [
      '@vssue/vuepress-plugin-vssue', {
        // 设置 `platform` 而不是 `api`
        platform: 'github',
  
        // 其他的 Vssue 配置
        owner: 'TienOUC',
        repo: 'vuepress',
        clientId: 'beee48e66891e82d6e90',
        clientSecret: '3366c29255a2c9b1a2769a58d43594892720cc4c',
        autoCreateIssue: true
      }
    ],
    [
      '@vuepress/back-to-top'
    ]
  ],
  themeConfig: {
    smoothScroll: true,
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