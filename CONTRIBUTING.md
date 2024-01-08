# LEOSTAR-UI Contributing Guide

Hi! I'm really excited that you are interested in contributing to LEOSTAR-UI. Before submitting your contribution, please make sure to take a moment and read through the following guidelines

## Development Setup

You will need [Node.js](https://nodejs.org) **version 16+**, and [PNPM](https://pnpm.io) **version 8+**.

After cloning the repo, run:

```bash
$ pnpm i # install the dependencies of the project
```

A high level overview of tools used:

- [@antfu/ni](https://github.com/antfu/ni) as pagkage manager
- [TypeScript](https://www.typescriptlang.org/) as the development language
- [Vite](https://vitejs.dev/) and [ESBuild](https://esbuild.github.io/) for development bundling
- [Vitest](https://vitest.dev/) for unit testing
- [Tsx](https://github.com/esbuild-kit/tsx) for run TypeScript
- [React](https://react.docschina.org/) for frontend framework
- [Unocss](https://unocss.dev/) for frontend styling
- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for static error prevention (outside of types)

## Extensions

We recommend using [VSCode](https://code.visualstudio.com/) with the following extensions:

- [editorconfig.editorconfig]() for editorconfig
- [dbaeumer.vscode-eslint]() for eslint
- [esbenp.prettier-vscode]() for prettier
- [lokalise.i18n-ally]() for i18n preview in vscode
- [antfu.unocss]() for unocss preview in vscode

## Git Hooks

The project uses [husky](https://typicode.github.io/husky/) to enforce the following on each commit:

- Check unit tests before push
- Automatically format changed files using Prettier & Eslint
- Verify commit message format (conventional commit)

## Scripts

- [`pnpm build`](#pnpm-build)
- [`pnpm commit`](#pnpm-commit)
- [`pnpm preview`](#pnpm-preview)
- [`pnpm lint`](#pnpm-lint)
- [`pnpm test`](#pnpm-test)
- [`pnpm play`](#pnpm-play)

### pnpm build

The `build` script builds all packages in the repository. It is equivalent to running `pnpm build` in each package directory.

### pnpm commit

We use [commitlint] (https://commitlint.js.org/) to check the submitted information. It will check that the submitted message conforms to the format we have defined. If the submission message does not conform to the format, it will return an error that is used, usage nr commit=git add . && cz-git。
