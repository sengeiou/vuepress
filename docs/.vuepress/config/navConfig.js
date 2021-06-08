module.exports = [
    {
        text: "主页",
        link: "/",
        icon: 'reco-home'
    },
    {
        text: "新闻",
        items: [
            {
                text: "",
                items: [
                    {
                        text: "全球财经",
                        link: "https://news.dodolo.top"
                    },
                    {
                        text: "新冠疫情",
                        link: "https://covid.dodolo.top"
                    }
                ]
            }
        ], icon: 'reco-blog'
    },
    // {
    //     text: "财经",
    //     link: "https://news.dodolo.top",
    //     icon: 'reco-blog'
    // },
    // {
    //     text: "疫情",
    //     link: "https://covid.dodolo.top",
    //     icon: 'reco-message'
    // },
    // {
    //     text: "前端",
    //     items: [
    //         { text: "JavaScript", link: "/pages/frontEnd/javascript/" },
    //         { text: "Framework", link: "/pages/frontEnd/framework/" },
    //         { text: "CSS", link: "/pages/frontEnd/css/" }
    //     ],
    //     icon: 'reco-tag'
    // },
    {
        text: "分类",
        items: [
            {
                text: "前端",
                items: [
                    { text: "JavaScript", link: "/pages/frontend/javascript/" },
                    { text: "Framework", link: "/pages/frontend/framework/" },
                    { text: "CSS", link: "/pages/frontend/css/" },
                    { text: "协议类", link: "/pages/frontend/protocol/" },
                    { text: "组件库", link: "/pages/components/" }
                ]
            },
            {
                text: "后端",
                items: [
                    { text: "Python", link: "/pages/backend/python/" },
                    { text: "Database", link: "/pages/backend/serve/" },
                ]
            },
            {
                text: "其他",
                items: [
                    { text: "工具类", link: "/pages/gear/" },
                    { text: "自动化", link: "/pages/automator/" },
                    { text: "小程序", link: "/pages/miniprogram/" },
                    { text: "小总结", link: "/pages/summary/" }
                ]
            }
        ], icon: 'reco-category'
    },
    {
        text: "标签",
        link: "/tag/",
        icon: 'reco-tag'
    },
    {
        text: '时间轴', link: '/timeLine/', icon: 'reco-date'
    },
    {
        text: "联系我",
        items: [
            {
                text: "",
                items: [
                    // {
                    //     text: "邮箱",
                    //     link: "/pages/contact/email/",
                    //     icon: "reco-mail"
                    // },
                    {
                        text: "Gitee",
                        link: "https://gitee.com/tienouc",
                        icon: "reco-mayun"
                    },
                    {
                        text: "Github",
                        link: "https://github.com/TienOUC",
                        icon: "reco-github"
                    },
                    {
                        text: "TextMe",
                        link: "/pages/contact/",
                        icon: "reco-suggestion"
                        // icon: "reco-wechat"
                    },
                    // { text: '关于我', link: '/pages/about/', icon: 'reco-faq' }
                ]
            }
        ], icon: 'reco-account'
    }

]
