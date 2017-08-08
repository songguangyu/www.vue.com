#! /usr/bin/env bash
kill -INT `cat /etc/php/var/run/php-fpm.pid`
/opt/modules/openresty/nginx/sbin/nginx  -t -c /opt/www/www.vue.com/src/config/nginx.conf
/opt/modules/openresty/nginx/sbin/nginx  -s stop -c /opt/www/www.vue.com/src/config/nginx.conf

echo "nginx stop"
echo -e "===========================================\n\n"
#tail -f /opt/modules/openresty/nginx/logs/error.log
