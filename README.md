# 一只集记录、提醒、推送于一体的简单日志应用

[在线演示](https://mydaily.p18c.top)

## 🛠技术栈
- 前端  [仓库](https://github.com/mrrs878/my_daily)

    [Vue](https://cn.vuejs.org/index.html)、[Typescript](https://www.tslang.cn/)、[Vant](https://youzan.github.io/vant/#/zh-CN)、[PWA](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)、[Web Workers](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API)、[Websockets](https://developer.mozilla.org/zh-CN/docs/Web/API/Websockets_API)、[ECharts](https://www.echartsjs.com/zh/index.html)

- 后端  [仓库1(Golang)](https://github.com/mrrs878/my_daily_backend)  [仓库2(Koa)](https://github.com/mrrs878/push_service)

    [Go](https://golang.org/)、[JWT](github.com/dgrijalva/jwt-go)、[gin](github.com/gin-gonic/gin)、[gorm](github.com/jinzhu/gorm)、[Koa](https://koa.bootcss.com/)
## 🎉功能
- ✅ 登录、注册、权限拦截功能(JWT)

- ⬜微信登录(仅PC端)

- ✅ Github登录(OAuth)

- ✅ 任务/习惯增、删、改、查(gorm)(未分页)

- ✅ 任务/习惯完成情况图表分析(ECharts)

- ✅ 提醒功能(Web Workers)

- ✅ 离线访问能力(service worker)

- ✅ 在线消息推送(Websockets)

- ✅ 离线消息推送(WebPush)(仅PC端)

## 🤔FAQ
### 项目初衷

整合自己的技术栈 + 练习

### 前端实现提醒功能

在前端使用worker实现此可能并不合适（线程间通信的消耗没准会更大，而且在主线程内实现起来更简单）。此举只是为了练习worker API，尝试JavaScript的"多线程"能力

### 关于Service Worker推送

由于Golang没有实现[Web Push相关的包](https://github.com/web-push-libs)，npm上有[JavaScript版本](https://www.npmjs.com/package/web-push)的，因此使用Koa2简单搭建一个推送服务

## 🙃缺陷与不足

- **a lot bugs**
- 移动端不能接收到离线推送（pushManager在移动端subscribe时会报错，chrome、edge一样会中招）
- Golang不太熟练导致后端代码有不少潜在问题
- service worker 配置

## 💪未来计划

- 加入更多图表分析
- 优化CRUD方面
- 优化service worker
- 完成React版本
- 完成微信小程序版本
- ……

## 👀参考博客/文档

[MDN](https://developer.mozilla.org/zh-CN/)

[核心 PWA 指南](https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps)

[PWA文集](https://www.jianshu.com/nb/23900930)

[再读Golang中的异常处理 ](https://www.jianshu.com/p/c0b756d20efe)

[李文周的博客](https://www.liwenzhou.com/)

[Gin 使用 websocket - leffss](https://www.cnblogs.com/leffss/p/12218791.html)

[golang编译程序在linux上的部署](https://blog.csdn.net/wade3015/article/details/83387212)

📫：mrrs878@foxmail.com