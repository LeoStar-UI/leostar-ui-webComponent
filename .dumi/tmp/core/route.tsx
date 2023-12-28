// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"404":{"id":"404","path":"*","parentId":"DocLayout"},"GlobalLayout":{"id":"GlobalLayout","path":"/","parentId":"dumi-context-layout","isLayout":true},"dumi-context-layout":{"id":"dumi-context-layout","path":"/","isLayout":true},"DocLayout":{"id":"DocLayout","path":"/","parentId":"GlobalLayout","isLayout":true},"DemoLayout":{"id":"DemoLayout","path":"/","parentId":"GlobalLayout","isLayout":true},"docs/guide/index":{"path":"guide","id":"docs/guide/index","parentId":"DocLayout"},"docs/about/team":{"path":"about/team","id":"docs/about/team","parentId":"DocLayout"},"docs/index":{"path":"","id":"docs/index","parentId":"DocLayout"},"components/README":{"id":"components/README","path":"components","parentId":"DocLayout","meta":{"_atom_route":true}},"demo-render":{"id":"demo-render","path":"~demos/:id","parentId":"DemoLayout"}} as const;
  return {
    routes,
    routeComponents: {
'404': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__404" */'E:/LeoStar の 大前端之旅/最佳实践/leostar-ui/node_modules/dumi/dist/client/pages/404.js')),
'GlobalLayout': React.lazy(() => import(/* webpackChunkName: "nm__dumi-theme-chakra__dist__layouts__GlobalLayout__index" */'E:/LeoStar の 大前端之旅/最佳实践/leostar-ui/node_modules/dumi-theme-chakra/dist/layouts/GlobalLayout/index.js')),
'dumi-context-layout': React.lazy(() => import(/* webpackChunkName: "dumi__tmp__dumi__theme__ContextWrapper" */'E:/LeoStar の 大前端之旅/最佳实践/leostar-ui/.dumi/tmp/dumi/theme/ContextWrapper')),
'DocLayout': React.lazy(() => import(/* webpackChunkName: "nm__dumi-theme-chakra__dist__layouts__DocLayout__index" */'E:/LeoStar の 大前端之旅/最佳实践/leostar-ui/node_modules/dumi-theme-chakra/dist/layouts/DocLayout/index.js')),
'DemoLayout': React.lazy(() => import(/* webpackChunkName: "nm__dumi-theme-chakra__dist__layouts__DemoLayout__index" */'E:/LeoStar の 大前端之旅/最佳实践/leostar-ui/node_modules/dumi-theme-chakra/dist/layouts/DemoLayout/index.js')),
'docs/guide/index': React.lazy(() => import(/* webpackChunkName: "docs__guide__index.md" */'E:/LeoStar の 大前端之旅/最佳实践/leostar-ui/docs/guide/index.md')),
'docs/about/team': React.lazy(() => import(/* webpackChunkName: "docs__about__team.md" */'E:/LeoStar の 大前端之旅/最佳实践/leostar-ui/docs/about/team.md')),
'docs/index': React.lazy(() => import(/* webpackChunkName: "docs__index.md" */'E:/LeoStar の 大前端之旅/最佳实践/leostar-ui/docs/index.md')),
'components/README': React.lazy(() => import(/* webpackChunkName: "packages__components__README.md" */'E:/LeoStar の 大前端之旅/最佳实践/leostar-ui/packages/components/README.md')),
'demo-render': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__Demo__index" */'E:/LeoStar の 大前端之旅/最佳实践/leostar-ui/node_modules/dumi/dist/client/pages/Demo/index.js')),
},
  };
}