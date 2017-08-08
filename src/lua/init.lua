local cjson = require "cjson";
local cache = ngx.shared.config_cache;
local resourcesFile =  io.open("/opt/www/www.vue.com/src/config/resources.properties", "r");
local resourcesStr = resourcesFile:read("*a");
resourcesFile:close();
local resourcesJson = cjson.decode(resourcesStr);
ngx.log(ngx.ERR, "========begin config=========");
for k,v in pairs(resourcesJson) do
   ngx.log(ngx.ERR, "key:" .. k .. ", value:" .. v);
end
ngx.log(ngx.ERR, "========end config=========");
