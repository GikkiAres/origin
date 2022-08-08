import type { NavbarConfig } from '@vuepress/theme-default'
// import { version } from '../meta'

export const navbarConfig: NavbarConfig = [
    // NavbarItem
    {
        text: 'About',
        children: [{
            text: "AboutMe",
            link: "/AboutMe.md"
        }, {
            text: "ChangeLog",
            link: "/ChangeLog.md"
        }]
    },
    {
        text: '沟通',
        children: [{
            text: "爱的五种能力",
            //url不能包含中文,相对于doc资源的目录.
            link: "/Communicate/FiveAbilityOfLove"
        }, {
            text: "xxx",
            children: [{
                text: "aaaa",
                link: "a31.md"
            }, {
                text: "bbbb",
                link: "3331.md"
            }]
        }]
    },
    {
        text:"glfw",
        link:""
    },
    {
        text:"opengl",
        link:""
    },
    {
        text:"ffmpeg",
        link:""
    },
    {
        text:"音视频开发",
        link:""
    }
]
