module.exports = {
    observe: function(datasource, callback) {
        if ('observe' in Object) {
            Object.observe(datasource, callback);
        } else {
            Object.keys(datasource).forEach(function(key) {
                var value = datasource[key];
                Object.defineProperty(datasource, key, {
                    enumerable: true,
                    configurable: true,
                    get: function() {
                        return value;
                    },
                    set: function(newvalue) {
                        value = newvalue;
                        callback(newvalue);
                    }
                });
            });
        };
    },
    provide: function(str) { //创建空间
        var space = window;
        var spas = str.split('.');
        for (var i = 0, l = spas.length; i < l; i++) {
            if (space[spas[i]]) {
                space = space[spas[i]];
            } else {
                space = space[spas[i]] = new Object();
            };
        };
    }
};