local cjson = require "cjson";
local upstreams = {{ip="127.0.0.1",port=8080}};
ngx.shared.upstream_list:set("upstream_nodejs",cjson.encode(upstreams));
ngx.log(ngx.ERR, "写入共享缓存", cjson.encode(upstreams));
