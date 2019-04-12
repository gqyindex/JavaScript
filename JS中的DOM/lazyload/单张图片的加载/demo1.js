window.onload = function () {
    var box = document.getElementById('box')
    var imgObj = document.getElementById('imgObj');
    //正常情况下加载
   var timer =  window.setInterval(function () {
        // var imgsrc = imgObj.getAttribute('truesrc');
        // imgObj.src = imgsrc;
        // imgObj.style.display = 'block';
        // window.clearInterval(timer);

       //异常情况下，比如图片不存在的情况下
       var tempImg = new Image;
       tempImg.src = imgObj.getAttribute('truesrc');
       tempImg.onload = function () {
           imgObj.src = tempImg.src;
           imgObj.style.display = 'block';
       };
       window.clearInterval(timer);
    },1000);





}