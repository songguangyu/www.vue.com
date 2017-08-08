--加载Lua模块库
local uri = ngx.var.uri;
local template = require "resty.template";  
--1、获取请求参数中的商品ID
local ids, err = ngx.re.match(uri, "[0-9]+");
local productData = require "nxiao.product_data";
--2、调用相应的服务获取数据
if ids then
    local data = productData.getData(ids[0]);
    --3、渲染模板
    local rend = template.compile("prodoct.html");
    local tmpl = rend(data);
    -- 请求文件不存在直接返回404
    if tmpl == uri then
        ngx.exit(ngx.HTTP_NOT_FOUND);
        return;
    end
    ngx.header.content_type = "text/html; charset=utf-8";
    --4、通过ngx API输出内容  
    ngx.say(tmpl);
else
    if err then
        ngx.log(ngx.ERR, "error: ", err);
        return
    end
    ngx.say("match not found");
end