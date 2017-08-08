local cjson = require "cjson";
local balancer = require "ngx.balancer";
local upstreams = cjson.decode(ngx.shared.upstream_list:get("upstream_nodejs"));
local ip_port = upstreams[math.random(1,table.getn(upstreams))];
local ok, err = balancer.set_current_peer(ip_port.ip,ip_port.port);
if not ok then
    ngx.log(ngx.ERR, "failed to set the current peer: ", err);   
    return ngx.exit(500);
end