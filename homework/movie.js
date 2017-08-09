var webpage = require('webpage');
var page = webpage.create();
var fs = require('fs');
phantom.outputEncoding = 'utf-8';

page.open('http://www.douban.com',function (status) {
    if (status === 'success'){
        console.log('加载成功');
        console.log(page.title);
        page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js',function () {
            setTimeout(function () {
                var content = page.evaluate(function () {
                    var arr = [];
                    $('#anony-video .video-cover > a').each(function (index, element){
                        //  arr.push($(element).attr('src'));
                        arr.push($(element).css("backgroundImage").replace('url(','').replace(')',''));
                    });
                    return arr;
                });
                fs.write('./url.json',content,'w');
                phantom.exit(0)
            },10000)
        })
    }else {
        console.log('加载失败');
        phantom.exit(0)
    }
});