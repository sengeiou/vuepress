const headConfig = require('./config/headConfig');
const pluginsConfig = require('./config/pluginsConfig')
const navConfig = require('./config/navConfig')
// const sidebarConfig = require('./config/sidebarConfig')   //replaced by  vuepress-plugin-auto-sidebar
// const nav = require('./nav')
const markdownConfig = require('./config/markdownConfig')

module.exports = {
  base: '/vuepress/',
  title: "Tien's Blog",
  description: '笔记 | 博客',
  markdown: markdownConfig,
  head: headConfig,
  plugins: pluginsConfig,
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '最后更新',
    nav: navConfig,
    // nav: nav,
    // sidebar: sidebarConfig
  }
}

