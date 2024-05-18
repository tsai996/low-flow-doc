import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "LowFlow",
    description: "中国式工作流系统",
    base: '/low-flow-docs/',
    head: [
        ['link', {rel: 'icon', href: '/assets/favicon.svg'}],
    ],
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        siteTitle: 'LowFlow',
        logo: '/assets/logo.svg',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You',
        },
        nav: [
            {text: '主页', link: '/'},
            {text: '快速开始', link: '/quick-start'},
            {text: '👥加入群聊', link: '/group-chat'},
            {
                text: '开源地址',
                items: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/tsai996/lowflow-design'
                    },
                    {
                        text: 'Gitee',
                        link: 'https://gitee.com/cai_xiao_feng/lowflow-design',
                    }
                ]
            },

        ],
        search: {
            provider: 'local'
        },
        sidebar: [
            {
                text: '快速开始',
                items: [
                    {text: '流程设计器', link: '/process-designer'},
                    {text: '表单设计器', link: '/form-designer'}
                ]
            },
            {
                text: '更新日志',
                items: [
                    {text: '更新日志', link: '/update-logs'}
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    },

})
