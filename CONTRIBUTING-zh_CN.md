# LEOSTAR-UI 贡献指南

嗨！我非常兴奋你对 LEOSTAR-UI 感兴趣并希望做出贡献。在提交你的贡献之前，请花点时间阅读以下准则。

## 开发环境设置

你需要 [Node.js](https://nodejs.org) **16+ 版本**和 [PNPM](https://pnpm.io) **8+ 版本**。

在克隆仓库后，运行：

```bash
$ pnpm i # 安装项目的依赖
```

开发中使用的工具的高级概述：

- [TypeScript](https://www.typescriptlang.org/) 作为开发语言
- [Vite](https://vitejs.dev/) 和 [ESBuild](https://esbuild.github.io/) 用于开发打包
- [Vitest](https://vitest.dev/) 用于单元测试
- [Tsx](https://github.com/esbuild-kit/tsx) 用于运行 TypeScript
- [React](https://react.docschina.org/) 作为前端框架
- [Unocss](https://unocss.dev/) 用于前端样式
- [Prettier](https://prettier.io/) 用于代码格式化
- [ESLint](https://eslint.org/) 用于静态错误预防（除类型之外）

## 扩展

我们推荐使用 [VSCode](https://code.visualstudio.com/) 并安装以下扩展：

- [editorconfig.editorconfig]() 用于编辑器配置
- [dbaeumer.vscode-eslint]() 用于 eslint
- [esbenp.prettier-vscode]() 用于 prettier
- [lokalise.i18n-ally]() 用于在 vscode 中预览 i18n
- [antfu.unocss]() 用于在 vscode 中预览 unocss

## Git Hooks

该项目使用 [husky](https://typicode.github.io/husky/) 在每次提交时执行以下操作：

- 在推送之前检查单元测试
- 自动使用 Prettier 和 Eslint 格式化更改的文件
- 验证提交消息格式（符合常规提交规范）

## 脚本

- [`pnpm build`](#pnpm-build)
- [`pnpm cz`](#pnpm-cz)
- [`pnpm preview`](#pnpm-preview)
- [`pnpm lint`](#pnpm-lint)
- [`pnpm test`](#pnpm-test)

### pnpm build

`build` 脚本构建仓库中的所有包。它等同于在每个包目录中运行 `pnpm build`。
