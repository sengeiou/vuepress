module.exports = [
    {
        text: "主页",
        link: "/",
        icon: 'reco-home'
    },
    {
        text: "疫情",
        link: "http://139.129.222.60/covid",
        icon: 'reco-message'
    },
    {
        text: "分类",
        items: [
            {
                text: "前端",
                items: [
                    { text: "JavaScript", link: "/pages/web/javascript/" },
                    { text: "Webpack", link: "/pages/web/webpack/" },
                    { text: "CSS", link: "/pages/web/css/" },
                    { text: "Vue", link: "/pages/web/framework/vue/" }
                ]
            },
            {
                text: "工具",
                items: [
                    { text: "VsCode", link: "/pages/tools/ide/" },
                    { text: "iTerm2", link: "/pages/tools/others/iterm2/" },
                    { text: "Markdown", link: "/pages/tools/others/markdown/" }
                ]
            },
            {
                text: "组件",
                items: [
                    { text: "组件文档", link: "/pages/components/" }
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
