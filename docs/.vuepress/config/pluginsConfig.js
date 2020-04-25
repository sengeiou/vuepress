const secret = require('./secret')

module.exports = [
  [
    '@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        message: "有新的内容更新",
        buttonText: "点击刷新"
      }
    }
  ],
  // [
  //   '@vssue/vuepress-plugin-vssue', {
  //     platform: 'github-v4',
  //     owner: 'TienOUC',
  //     repo: 'vuepress',
  //     clientId: secret.clientId,
  //     clientSecret: secret.clientSecret,
  //     autoCreateIssue: true
  //   }
  // ],
  [
    '@vuepress/back-to-top'
  ],
  [
    '@vuepress/google-analytics',
    {
      'ga': secret.ga
    }
  ],
  [
    '@vuepress/medium-zoom', {
      selector: 'img',
      options: {
        margin: 16
      }
    }
  ],
  [
    'vuepress-plugin-auto-sidebar', {
      nav: true,
      titleMode: "titlecase",
      collapsable: true
    }
  ]
]