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
                    { text: "JavaScript", link: "/pages/frontEnd/javascript/" },
                    { text: "Framework", link: "/pages/frontEnd/framework/" },
                    { text: "CSS", link: "/pages/frontEnd/css/" },
                    { text: "协议类", link: "/pages/frontEnd/protocol/" },
                    { text: "工具类", link: "/pages/tools/" },
                    { text: "组件库", link: "/pages/components/" }
                ]
            },
            {
                text: "其他",
                items: [
                    { text: "DIY", link: "/pages/application/" },
                    { text: "服务器", link: "/pages/server/" },
                    { text: "小程序", link: "/pages/miniProgram/" },
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
