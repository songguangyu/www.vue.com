## 简介

该案例主要实现lua结合nginx(OpenResty)结合开发动态服务端

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
```
.
├── src
│   ├── bin(shell启停脚本)
│   │   ├── start.sh
│   │   └── stop.sh
│   ├── config(ngx配置文件)
│   │   ├── domains
│   │   │   └── www.vue.com.conf
│   │   ├── mime.types
│   │   ├── nginx.conf
│   │   └── resources.properties
│   ├── js(前端项目)
│   │   ├── .babelrc
│   │   ├── less
│   │   │   ├── index.less
│   │   │   └── main.less
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── index.js
│   │   │   ├── main.js
│   │   │   ├── module
│   │   │   │   └── user.js
│   │   │   ├── play.js
│   │   │   ├── utils
│   │   │   │   ├── observe.js
│   │   │   │   ├── template.js
│   │   │   │   └── utils.js
│   │   │   ├── views
│   │   │   │   ├── index.vue
│   │   │   │   └── main.vue
│   │   │   └── virtual.js
│   │   └── webpack.config.js
│   ├── lua(lua代码)
│   │   ├── dyna_balancer.lua
│   │   ├── dyna_upstreams.lua
│   │   ├── init.lua
│   │   ├── lib
│   │   │   └── nxiao
│   │   │       └── product_data.lua
│   │   ├── product_controller.lua
│   │   └── upstream_controller.lua
│   ├── php(php代码)
│   │   ├── config
│   │   └── lib
│   └── template
│       └── prodoct.html
└── www (web访问目录)
    ├── css
    │   └── index.min.css
    ├── favicon.ico
    ├── images
    │   └── sicons.png
    ├── index.html
    ├── index.php
    ├── main.html
    ├── media
    │   └── 1fb433aa2aee9b7ad3d3957b582787de.f4v
    ├── play.html
    ├── script
    │   ├── index.min.js
    │   ├── libs
    │   │   └── commons.min.js
    │   ├── main.min.js
    │   ├── play.min.js
    │   └── virtual.min.js
    └── virtual.html
```
## 注意

因为每个人项目目录不同请修改src/config进行正确配置

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
## 安装webpack
```
cd src/js
sudo npm install
```
## webpack压缩项目
```
cd src/js
sudo webpack -p
```
## 备注

本人会不断更具研究项目进行更新(363305175)。