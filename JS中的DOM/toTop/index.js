window.onload = function () {
    var box = document.getElementById('box');
    var back = document.getElementById('back');
    //点击返回顶部
    back.onclick = function () {
        //直接跳回顶部
       // box.scrollTop = 0;
        //动画形式返回到顶部
        //1.定时器，设置时间变化的步长
        var timerID = setInterval(function () {
            var space = 80;
            box.scrollTop -=space;
            if (box.scrollTop === 0){
                window.clearInterval(timerID);
            }
        },10);

    }

}