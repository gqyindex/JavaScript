window.onload = function () {
    function jsonp(obj) {
        //定义一个处理Jsonp返回数据的回调函数
        window["callback"] = function(object) {
            obj.success(JSON.parse(object));
        }
        var script = document.createElement("script");
        //组合请求URL
        script.src = obj.url + "?fn=callback";
        for(key in obj.data){
            script.src +="&" + key + "=" + obj.data[key];
        }
        //将创建的新节点添加到BOM树上
        document.getElementsByTagName("body")[0].appendChild(script);
    }

    jsonp({
        url:"https://toutiao.eastday.com/toutiao_h5/pulldown?htps=1&type=tiyu&startkey=9223370480754592423%7C0006_tt%7C%7C%7C%7C%7C%7C%7C&lastkey=1556107124466%7C0006_tt%40%23%24&tagskey=%7C&pgnum=-1&zdnews=190424145908735%2C190424113955165&idx=0&readhistory=190424113215477&recgid=15561060394867160&qid=qid02650&os=iOS+11_0&sclog=0&pos_pro=%E5%AE%89%E5%BE%BD&pos_city=%E5%90%88%E8%82%A5&_=1556107290150&jsonpcallback=Zepto1556107281180",
        success:function(data) {
            console.log(data)
        }
    });
}

