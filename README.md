[中文](https://github.com/ningxiao/www.vue.com)

## 简介

该案例搭建lua结合nginx(OpenResty)开发动态服务端

## 特点

OpenResty 是一个基于 Nginx 与 Lua 的高性能 Web 平台，其内部集成了大量精良的 Lua 库、第三方模块以及大多数的依赖项。用于方便地搭建能够处理超高并发、扩展性极高的动态 Web 应用、Web 服务和动态网关 [动态web服务](https://openresty.org/cn/)。

1. lua结合redis读取数据渲染模板。 

```
示例:http://127.0.0.1/1856583.html
```
2. lua动态修改反向代理(upstream),实现代理服务动态增减。

```
示例:http://127.0.0.1/api/upstream?list=[{"ip":"192.168.203.71","port":8080},{"ip":"192.168.204.61","port":8080}]
```
3. vue与webpack结合。 

```
示例:http://127.0.0.1/index.html
```

## 目录结构
.
├── src
│   ├── bin (shell启停脚本)
│   ├── config (ngx配置文件)
│   │   └── domains
│   ├── js (前端项目)
│   │   ├── less
│   │   └── src
│   │       ├── module
│   │       ├── utils
│   │       └── views
│   ├── lua (lua代码)
│   │   └── lib
│   │       └── nxiao
│   ├── php (php代码)
│   │   ├── config
│   │   └── lib
│   └── template
└── www (web访问目录)
    ├── css
    ├── images
    ├── media
    └── script
        └── libs

> 用法

## 启动项目
```
cd src/bin
sudo ./start.sh
```
## 停止项目
```
cd src/bin
sudo ./stop.sh
```
## webpack压缩项目
```
cd src/js
sudo webpack -p
```