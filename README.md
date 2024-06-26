# vue-credit
VUE2前端项目-信贷后台管理系统 

**项目描述**

该项目为信贷后台管理系统，主要模块有：用户登录及注册、贷款申请及审批、合同生成及下载、权限管理。利用前端模块化、工程化，使用Vue 框架做响应式开发，利用前端的组件工具库实现信贷管理交互。

**项目技术栈**

Vue / Vuex / Vue-Router / Element-Ui / Axios / Webpack / Echarts / Scss

**项目职责**

1. 参与项目需求分析和概要设计，与团队成员共同确定项目的技术架构和开发计划；
2. 使用 Vue、Vuex 和 vue-router 搭建项目框架，负责前端页面的布局和组件开发；
3. 利用 Axios 进行 API 请求，与后端工程师协作，确保数据接口的顺畅对接；
4. 应用 Element-Ui 进行界面开发，使用 Scss对 CSS 进行预处理和优化；
5. 利用 Webpack 对项目进行打包和优化，提升系统性能和用户体验；
6. 使用 Echarts进行数据可视化展示，为管理员提供直观的统计报表；
7. 实现 RBAC 权限管理，动态表单缩放调整，文件异步请求下载，前后端分离跨域处理。

**技术难点**

1. RBAC 权限设计实现路由权限，按钮权限，动态菜单；
2. 使用 Echarts 框架 API 构建可视化交互式图表更好的处理数据，实现可视化图表自适应；
3. 采用前后端分离的开发模式，前端服务器根据规范的后端接口手册，实现双拦截响应封装与token鉴权；
4. 通过使用路由懒加载加分片打包来提高页面的加载速度，通过对指定的文件进行压缩减少打包后的文件大小等方法，优化前端性能，提高用户体验。	


   
## Project setup

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
