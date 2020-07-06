module.exports = [
    {
        text: "主页",
        link: "/",
        icon: 'reco-home'
    },
    {
        text: "疫情",
        link: "http://www.dodolo.top/covid",
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
                text: "后端",
                items: [
                    { text: "CentOS", link: "/pages/server/centos/" },
                    { text: "Nginx", link: "/pages/server/nginx/" },
                    { text: "Database", link: "/pages/server/database/" },
                ]
            },
            {
                text: "工具",
                items: [
                    { text: "IDE", link: "/pages/tools/ide/" },
                    { text: "Storybook", link: "/pages/tools/storybook/" },
                    { text: "Terminal", link: "/pages/tools/others/terminal/" },
                    { text: "Markdown", link: "/pages/tools/others/markdown/" }
                ]
            },
            {
                text: "组件",
                items: [
                    { text: "tiUI", link: "/pages/components/" }
                ]
            },
            {
                text: "小程序",
                items: [
                    { text: "云开发", link: "/pages/miniProgram/" }
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
