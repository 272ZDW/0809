var fs = require('fs');
var download = require('./download');
fs.readFile('./jingdong.json','utf-8',function (error,data) {
    var array = (data.split(','));
    array.forEach(function (item,index) {
        console.log('http:'+item);
        download('http:'+item,'shopping',index + 1 + '.jpg');
    });
});