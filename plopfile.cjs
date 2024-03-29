// Plop 入口文件，需要导入一个函数
// 此函数接受一个plop对象，用户创建生成器任务

module.exports = plop => {
  plop.setGenerator("component", {
    // component pnpm plop命令后面带来指令名称
    description: "create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name",
        default: "MyComponent"
      }
    ],
    actions: [
      {
        type: "add", // 代表添加文件
        path:
          "component/src/components/{{ name }}/{{ name }}.tsx", // 要生成的文件路径
        templateFile: "internal/plop-templates/component.hbs" // 文件模板
      },
      {
        type: "add", // 代表添加文件
        path:
          "component/src/components/{{ name }}/{{ name }}.scss", // 要生成的文件路径
        templateFile: "internal/plop-templates/style.hbs"
      },
      {
        type: "add", // 代表添加文件
        path:
          "component/src/components/{{ name }}/test/{{ name }}.e2e.ts", // 要生成的文件路径
        templateFile: "internal/plop-templates/test.e2e.hbs"
      },
      {
        type: "add", // 代表添加文件
        path:
          "component/src/components/{{ name }}/test/{{ name }}.spec.tsx", // 要生成的文件路径
        templateFile: "internal/plop-templates/test.spec.hbs"
      }
    ]
  });
};
