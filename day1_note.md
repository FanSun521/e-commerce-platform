1.1 项目运行浏览器自动打开
package.json 文件：

```json
"scripts": {
"serve": "vue-cli-service serve --open",
},
```

1.2 eslint 校验功能关闭
---在根目录下，创建一个 vue.config.js 文件

```js
lintOnSave: false;
```

1.3src 文件夹简写：配置别名
创建 jsconfig.json 文件

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/_": ["src/_"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```
 