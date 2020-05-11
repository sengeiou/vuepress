const headConfig = require('./config/headConfig');
const pluginsConfig = require('./config/pluginsConfig')
const navConfig = require('./config/navConfig')
const markdownConfig = require('./config/markdownConfig')

module.exports = {
    base: '/vuepress/',
    title: "Tien's Blog",
    description: ' ',
    markdown: markdownConfig,
    head: headConfig,
    plugins: pluginsConfig,
    themeConfig: {
        smoothScroll: true,
        lastUpdated: '最后更新',
        nav: navConfig,
        //vuepress-theme-reco 第三方主题配置
        author: 'Tien',
        type: 'blog',
        sidebar: 'auto',
        authorAvatar: '/assets/img/avatar.jpg',
        // friendLink: [
        //     {
        //         title: 'vuepress-theme-reco',
        //         desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        //         logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        //         link: 'https://vuepress-theme-reco.recoluan.com'
        //     },
        //     {
        //         title: '午后南杂',
        //         desc: 'Enjoy when you can, and endure when you must.',
        //         email: 'recoluan@qq.com',
        //         link: 'https://www.recoluan.com'
        //     },
        // ],
        noFoundPageByTencent: false,  // 404 腾讯公益
        // 备案
        // record: 'ICP 备案文案',
        // recordLink: 'ICP 备案指向链接',
        // cyberSecurityRecord: '公安部备案文案',
        // cyberSecurityLink: '公安部备案指向链接',
        // // 项目开始时间，只填写年份
        // startYear: '2017'
    },
    //vuepress-theme-reco 第三方主题配置
    theme: 'reco',
    // 博客配置
    blogConfig: {
        category: {
            location: 2,     // 在导航栏菜单中所占的位置，默认2
            text: 'Category' // 默认文案 “分类”
        },
        tag: {
            location: 3,     // 在导航栏菜单中所占的位置，默认3
            text: 'Tag'      // 默认文案 “标签”
        }
    }
}

