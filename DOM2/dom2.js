window.onload = function () {
    var box = document.getElementById("box");



    //标准浏览器
 /*   box.addEventListener("click",fn,false);//box
      box.removeEventListener("click",fn,false);*/

    //IE6-8
/*    box.attachEvent("onclick",fn);//window
      box.detachEvent("onclick",fn);*/

//改变this的指向
      //box.addEventListener('click',fn1,false);//box

   /* var tempfn = function () {
        fn1.call(box)
    };
    box.attachEvent('onclick',tempfn);
    box.detachEvent('onclick',tempfn);*/


     /* box.attachEvent("onclick",function () {
          fn1.call(box);
      });*/

    var tempfn = null;
    //绑定事件
    function bind(element,event,fn) {
        if ('addEventListener' in document){
            element.addEventListener(event,fn,false);
        }else {
            //改变this的指向问题
            tempfn = function () {
                fn.call(element)
            };
            //处理多个绑定事件，清除特定的事件
            tempfn.photo = fn;
            if (!element['mybind'+event]){
                element['mybind'+event]=[]
            }
            element['mybind'+event].push(tempfn);
            element.attachEvent('on'+event,tempfn);
        }
    }

    //解除绑定事件
    function unbind(element,event,fn) {
        if ('removeEventListener' in document){
            element.removeEventListener(event,fn,false);
        } else {
            var ary = element['mybind'+event];
            for (var i = 0;i<ary.length;i++){
                if (ary[i].photo === fn){
                    ary.splice(i,1);
                    element.detachEvent('on'+event,ary[i]);
                    break;
                }
            }
        }
    }

    function fn() {
        console.log('result');
    }
    function fn1(){
        console.log(this===window);
    }
     bind(box,'click',fn);
     bind(box,'mouseenter',fn1);
    //unbind(box,'click',fn);

};