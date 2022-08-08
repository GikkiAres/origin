const { defaultTheme } = require('@vuepress/theme-default')
//默认加载文件夹的index.ts的内容.
import { navbarConfig,sidebarConfig,headConfig} from './configs'
module.exports = {
    theme: defaultTheme({
        logo: "logo.png",
        navbar: navbarConfig,
        sidebar: sidebarConfig,
        repo: "https://github.com/GikkiAres/origin"
    }),
    // 网站的一些基本配置
    // base:配置部署站点的基础路径，后续再介绍
    title: 'GikkiAres', // 网站的标题
    description: 'GikkiAres', // 网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
    head: headConfig,
    lang: 'zh-CN'
}