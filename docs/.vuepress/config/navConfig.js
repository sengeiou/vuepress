module.exports = [
    {
        text: "主页",
        link: "/",
        icon: 'reco-home'
    },
    {
        text: "疫情",
        link: "http://blog.dodolo.top/covid",
        icon: 'reco-message'
    },
    {
        text: "分类",
        items: [
            {
                text: "前端", 
                items: [
                    { text: "JavaScript", link: "/pages/frontEnd/javascript/" },
                    { text: "CSS", link: "/pages/frontEnd/css/" },
                    { text: "Framework", link: "/pages/frontEnd/framework/" }
                ]
            },
            {
                text: "工具",
                link: "/pages/tools/"
            },
            {
                text: "组件", link: "/pages/components/"
            },
            {
                text: "服务器", link: "/pages/server/"
            },
            {
                text: "小程序", link: "/pages/miniProgram/"
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
                    {
                        text: "微信",
                        link: "/pages/contact/",
                        icon: "reco-wechat"
                    },
                    {
                        text: "邮箱",
                        link: "/pages/contact/email/",
                        icon: "reco-mail"
                    },
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
                    { text: '关于我', link: '/pages/about/', icon: 'reco-faq' }
                ]
            }
        ], icon: 'reco-account'
    }

]
