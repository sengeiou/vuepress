const headConfig = require('./config/headConfig');
const pluginsConfig = require('./config/pluginsConfig')
// const navConfig = require('./config/navConfig')
const nav = require('./nav')
// const sidebarConfig = require('./config/sidebarConfig')
const markdownConfig = require('./config/markdownConfig')

module.exports = {
  base: '/vuepress/',
  title: "Tien",
  description: '笔记 | 博客',
  markdown: markdownConfig,
  head: headConfig,
  plugins: pluginsConfig,
  themeConfig: {
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    // logo: '/assets/img/tower.png',
    // sidebar: sidebarConfig,  //replaced by  vuepress-plugin-auto-sidebar  
    nav: nav     // nav: navConfig 
  }
}