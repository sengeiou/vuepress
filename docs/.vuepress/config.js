const headConfig = require('./config/headConfig');
const pluginsConfig = require('./config/pluginsConfig')
const navConfig = require('./config/navConfig')
const markdownConfig = require('./config/markdownConfig')
const secret = require('./config/secret')
module.exports = {
    base: '/vuepress/',
    title: "Tien's Blog",
    description: 'The truth is what it is, not what you see.',
    markdown: markdownConfig,
    head: headConfig,
    plugins: pluginsConfig,
    themeConfig: {
        smoothScroll: true,
        lastUpdated: '更新时间',
        nav: navConfig,
        //vuepress-theme-reco 第三方主题配置
        // logo: '/assets/img/avatar.jpg',
        author: 'Tien',
        type: 'blog',
        // sidebar: 'auto',
        subSidebar: 'auto',
        authorAvatar: '/assets/img/avatar.jpg',
        valineConfig: {
            appId: secret.appID,// your appId
            appKey: secret.appKey, // your appKey
        },
        // vssueConfig: {
        //     platform: 'github-v4',
        //     owner: 'TienOUC',
        //     repo: 'vuepress',
        //     clientId: secret.clientId,
        //     clientSecret: secret.clientSecret,
        // },
        friendLink: [
            // {
            //     title: 'Tien_风野',
            //     desc: 'Tien_风野的简书主页',
            //     logo: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gevz8rz6rvj302t02s3yb.jpg',
            //     link: 'https://www.jianshu.com/u/b55e4540abdc'
            // },
            {
                title: '阮一峰',
                desc: '阮一峰的网络日志',
                logo: 'https://tva1.sinaimg.cn/large/007S8ZIlly1gevz8rz6rvj302t02s3yb.jpg',
                link: 'http://www.ruanyifeng.com/blog/'
            },
            {
                title: 'vuepress-theme-reco',
                desc: '一款简约的VuePress博客&文档主题',
                logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
                link: 'https://vuepress-theme-reco.recoluan.com'
            }
        ],
        noFoundPageByTencent: false,  // 404 腾讯公益
        // 备案
        record: '京ICP备20029652号',
        recordLink: 'http://www.beian.miit.gov.cn',
        // cyberSecurityRecord: '京公网安备',
        // cyberSecurityLink: '公安部备案指向链接',
        // // 项目开始时间，只填写年份
        startYear: '2019'
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

