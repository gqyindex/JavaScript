window.onload = function () {
    var box = document.getElementById('box');
    var mask = document.getElementById('mask');
    var detail = document.getElementById('detail');

    box.onmouseenter = function () {
         mask.style.display = 'block';
         detail.style.display = 'block';

    };

    box.onmouseover = function (ev) {

        //存储大图移动时的距离标准
        var tempL = 0;
        var tempT = 0;
        //最大最小的left
        var minL = this.offsetLeft+8+'px';
        var maxL = this.offsetWidth+8 +this.offsetLeft - mask.offsetWidth+'px';

        //最大最小的top
        var minT = this.offsetTop+8+mask.offsetWidth+'px';
        var maxT = this.offsetWidth+8 +this.offsetTop - mask.offsetWidth+'px';

        if (mask.style.left > maxL){
            mask.style.left = maxL;
            tempL = maxL;
        } else if (mask.style.left < minL){
            mask.style.left = minL;
            tempL = minL;
        } else {
            mask.style.left = (ev.clientX - mask.offsetWidth/2)+'px';
            tempL = (ev.clientX - mask.offsetWidth/2)+'px';
        }

        if (mask.style.top > maxT){
            mask.style.top = maxT;
            tempT = maxT;
        } else if (mask.style.top < minT){
            mask.style.top = minT;
            tempT = minT;
        } else {
            mask.style.top = (ev.clientY - mask.offsetWidth/2)+'px';
            tempT = (ev.clientY - mask.offsetWidth/2)+'px';
        }

        var big_img = detail.getElementsByTagName('img')[0];
        big_img.style.left = -parseInt(tempL) * 2 +'px';
        big_img.style.top = -parseInt(tempT) * 2 +'px';
    };

    box.onmouseleave = function () {
        mask.style.display = 'none';
    }
};