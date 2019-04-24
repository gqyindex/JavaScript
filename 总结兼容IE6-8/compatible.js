window.onload = function () {

    //IE6-8对forEach方法兼容
    Array.prototype.myForEach = function myForEach(callback,contexts) {
        var context = contexts || window;
        if ("forEach" in Array.prototype){
            this.forEach(callback,context);
            return
        }
        for (var i=0;i<this.length;i++){
            callback&&callback.call(context,this[i],i,this);
        }
    };

   /* arr.myForEach(function (item,index,input) {
        console.log(item);
    });*/

    //兼容map
    Array.prototype.myMap = function(callback,contexts) {
        var context = contexts || window;
        if ("map" in  Array.prototype){
            return this.map(callback,context);
        }

        var newarr = [];
        for (var i = 0;i<this.length;i++){
            if (typeof callback === "function"){
                var res =  callback&&callback.call(context,this[i],i,this);
                newarr[newarr.length] = res;
            }
        }
        return newarr;
    };

    //兼容IE6-8鼠标事件
    function compate(e){
        //event
        var event = e || window.event;
        //target
        var target = e.target||e.srcElement;
        //pageY
        var pageY = e.pageY||e.clientY+(document.documentElement.scrollTop||document.body.scrollTop);
        //阻止浏览器默认事件
        var prevent = e.preventDefault||(e.return=false);
        //阻止冒泡
        var stop = e.stopPropagation||(e.cancelBubble=true);

    }

}