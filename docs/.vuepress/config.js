const headConfig = require('./config/headConfig');
const pluginsConfig = require('./config/pluginsConfig')
const navConfig = require('./config/navConfig')
const sidebarConfig = require('./config/sidebarConfig')


module.exports = {
  base: '/vuepress/',
  title: "Tien VuePress",
  description: 'Keep hungry, Keep foolish',
  head: headConfig,
  plugins: pluginsConfig,
  themeConfig: {
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    logo: '/assets/img/logo.png',
    sidebar: sidebarConfig,
    nav: navConfig
  }
}