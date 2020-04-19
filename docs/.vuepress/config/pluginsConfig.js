const secret = require('./secret')

module.exports = [
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
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'TienOUC',
      repo: 'vuepress',
      clientId: secret.clientId,
      clientSecret: secret.clientSecret,
      autoCreateIssue: true
    }
  ],
  [
    '@vuepress/back-to-top'
  ],
  [
    '@vuepress/google-analytics',
    {
      'ga': secret.ga
    }
  ]
]