var $ = require("jquery");
var xhr, dataType = "jsonp";
if (window.fetch) {
    console.log("fetch------------->get");
    fetch("http://192.168.204.61/upkey?name=35892.mp4&size=8290785", {
        method: "GET"
    }).then(function(res) {
        if (res.ok) {
            res.json().then(function(data) {
                console.log(data);
            });
        } else {
            console.log("获取失败", res.status);
        };
    }, function(err) {
        console.log(err);
    });
} else {
    console.log("ajax------------->get");
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            dataType = "json";
        };
    };
    $.ajax({
        url: "http://192.168.204.61/upkey",
        dataType: dataType,
        data: {
            name: "35892.mp4",
            size: "8290785"
        },
        error: function() {

        },
        success: function(res) {
            console.log(res);
        }
    });
};