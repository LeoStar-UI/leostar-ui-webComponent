// @ts-nocheck
import { defineConfig } from 'dumi'
import { defineThemeConfig } from 'dumi-theme-chakra';
import path from 'path'

let base: string | undefined
let publicPath: string | undefined

export default defineConfig({
        title: 'leostar-ui组件库', // 站点名称
        outputPath: 'docs/dist', // 输出文件夹
        resolve: {
                docDirs: ['docs'],
                atomDirs: [
                        // 在这里修改components的匹配路径
                        { type: 'component', dir: '/packages/components' }
                ],
                codeBlockMode: 'passive'
        },
        alias: {
                leostarUI: path.join(__dirname, 'packages/components') // 配置引入别名
        },
        themeConfig: {
          ...defineThemeConfig({
            name: 'LeoStar-UI',
            carrier: 'dumi', // 设备状态栏左侧的文本内容
            hd: true,
            rtl: true,
            social: {
              github: {
                name: 'GitHub',
                link: 'https://github.com/LeoStar-UI/leostar-ui',
                target: '_blank',
              },
            },
            nav: [ // dumi的菜单路由
                    {
                            title: '指南',
                            link: '/guide'
                    },
                    {
                            title: '组件',
                            link: '/components/alert'
                    },
                    {
                            title: '团队',
                            link: '/about/team'
                    },
                    {
                            title: '贡献',
                            link: '/contribution/index'
                    }
            ],
            footer: "Copyright © 2023 | Powered by LeoStar-UI"
          })
        },
})
