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

    arr.myForEach(function (item,index,input) {
        console.log(item);
    });

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

}