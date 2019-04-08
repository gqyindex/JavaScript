window.onload = function () {
    var contain = document.getElementById('contain');
    var imgObj = document.getElementById('imgObj');
    window.onscroll = function(){
        var totle = document.documentElement.scrollTop + document.body.clientWidth;
        if (contain.offsetTop <= totle) {
            if (! contain.isLoad) {
                var tempimg = new Image;
                tempimg.src = imgObj.getAttribute('trueSrc');
                tempimg.onload = function () {
                    imgObj.src = tempimg.src;
                    imgObj.style.display = 'block';
                    tempimg = null;
                    console.log('ok');
                    contain.isLoad = true;
                };
            }

        };
    };


}