module.exports = [
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