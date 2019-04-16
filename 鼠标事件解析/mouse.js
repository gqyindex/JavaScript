window.onload = function () {
    var box= document.getElementById('box');
    /*box.onmousemove = function () {
        console.log("鼠标在移动");
    }*/
   /* box.onmouseout = function () {
        console.log("鼠标离开了");
    }*/

    box.onmouseenter = function (ev) {
        console.log("鼠标进入");
        console.log(ev.clientX);
    }
    box.onmousemove = function (ev) {
        console.log("鼠标在移动");
        console.log(ev.clientX);
    }
    box.onmouseleave = function () {
        console.log("鼠标leave");
    };
}