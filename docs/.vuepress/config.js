const { defaultTheme } = require('@vuepress/theme-default')
module.exports = {
    theme: defaultTheme({
        logo: "logo.png",
        navbar: [
            // NavbarItem
            {
                text: 'About',
                children: [{
                    text: "AboutMe",
                    link: "AboutMe.md"
                }, {
                    text: "ChangeLog",
                    link: "ChangeLog.md"
                }]
            },
            // NavbarGroup
            {
                text: '沟通',
                children: [{
                    text: "爱的五种能力",
                    link: "/111.md"
                }, {
                    text: "xxx",
                    children: [{
                        text: "aaaa",
                        link: "a3.md"
                    }, {
                        text: "bbbb",
                        link: "333.md"
                    }]
                }]
            },


        ],
        sidebar: {
            '/guide/': [{
                text: 'Guide',
                children: ['/guide/README.md', '/guide/getting-started.md'],
            }, ],
            '/reference/': [{
                text: 'Reference',
                children: ['/reference/cli.md', '/reference/config.md'],
            }, ],
        },
        repo: "https://github.com/GikkiAres/origin"
    }),
    // 网站的一些基本配置
    // base:配置部署站点的基础路径，后续再介绍
    title: '穆瑾轩', // 网站的标题
    description: '穆瑾轩测试网页', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    head: [
        // 需要被注入到当前页面的 HTML <head> 中的标签
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    lang: 'zh-CN',
    //页面标题
    title: '欢迎光临',
    description: '这是我的第一个 VuePre111ss 站点',
}