window.onload = function () {

    var obj = {name:"周杰伦"};

    var arr = [23,45,56,67];

/*    var res = arr.forEach(function (item,index,input) {
        console.log(item);//23,45,56,67
        console.log(index);//0,1....
        console.log(input);//[23,45,56,67]
    });

    console.log(res);//undefined*/

/*   var res = arr.map(function (item,index,input) {
       console.log(this);//obj
       return item*2;
   },obj);

   console.log(res);*/

//IE6-8对forEach方法兼容
   Array.prototype.myForEach = function (callback,contexts) {
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

    var res = arr.myMap(function (item,index,input){
        return 3*item;
    });
    console.log(res);
};