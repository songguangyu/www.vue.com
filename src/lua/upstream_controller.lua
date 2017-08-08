local routing = {};
local uri = ngx.var.uri;
local query = ngx.req.get_uri_args();
function upstream(data)
    ngx.shared.upstream_list:set("upstream_nodejs",data);
    ngx.log(ngx.ERR, "更新upstream列表",data);
    ngx.say("更新upstream列表成功");
end
routing["/api/upstream"] = function()
	local list = query["list"] or nil;
    ngx.header.content_type = "text/html; charset=utf-8";
	if list == nil then
        ngx.say("更新upstream列表失败");
    else
	    upstream(query["list"] or nil);
	end
end
--是否存在配置路由如果不存在转跳404
if routing[uri] ~= nil then
	routing[uri]();
else
	ngx.exit(ngx.HTTP_NOT_FOUND);
end