window.onload = function () {
     var content = document.getElementById('content');

      //获取json数据
    var xhr = new XMLHttpRequest();
    xhr.open('get','db.json');
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (this.readyState!==4){
            return;
        };
        var data = JSON.parse(this.responseText);
        List(data);
    };

    //渲染新闻列表
    function List(data) {
        for (var i=0;i<data.length;i++){
            //图片模型
            var imgBox = document.createElement('div');
            imgBox.setAttribute('id','imgBox');
            var img = document.createElement('img');
            img.setAttribute('trueSrc','image.jpg');

            //新闻模型
            var newsBox = document.createElement('div');
            newsBox.setAttribute('id','newsBox');

            //标题模块
            var h3 = document.createElement('h3');
            h3.setAttribute('id','title');
            h3.innerHTML = data[i].title;

            //内容模块
            var p = document.createElement('p');
            p.innerText = data[i].news;

            imgBox.appendChild(img);
            newsBox.appendChild(h3);
            newsBox.appendChild(p);
            content.appendChild(imgBox);
            content.appendChild(newsBox);

            LazyLoad(img);
        }
    };

    function LazyLoad(imgObj){
        var timer = setInterval(function () {
            var tempimg = new Image;
            tempimg.src = imgObj.getAttribute('trueSrc');
            tempimg.onload = function () {
                imgObj.src = tempimg.src;
                imgObj.style.display = 'block';
                tempimg = null;
                clearInterval(timer);
            };
        },500);

        window.onscroll = function () {
            var totle = document.documentElement.scrollTop + document.body.clientWidth;
            if (content.offsetTop <= totle) {
                if (! content.isLoad) {
                    var tempimg = new Image;
                    tempimg.src = imgObj.getAttribute('trueSrc');
                    tempimg.onload = function () {
                        imgObj.src = tempimg.src;
                        imgObj.style.display = 'block';
                        tempimg = null;
                        content.isLoad = true;
                    };
                }
            }
        };
    };



};