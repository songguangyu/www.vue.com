#! /usr/bin/env bash
ps -fe|grep nginx |grep -v grep
if [ $? -ne 0 ]
then
	/etc/php/sbin/php-fpm
	/opt/modules/openresty/nginx/sbin/nginx  -t -c /opt/www/www.vue.com/src/config/nginx.conf
	/opt/modules/openresty/nginx/sbin/nginx -c /opt/www/www.vue.com/src/config/nginx.conf
	echo "nginx start"
else
	/opt/modules/openresty/nginx/sbin/nginx  -t -c /opt/www/www.vue.com/src/config/nginx.conf
	/opt/modules/openresty/nginx/sbin/nginx  -s reload -c /opt/www/www.vue.com/src/config/nginx.conf
	echo "nginx reload"
fi
echo -e "===========================================\n\n"
#tail -f /opt/modules/openresty/nginx/logs/error.log
