window.onload = function () {
    var bigBox = document.getElementById('bigBox');

   function ChildernNode(ele1,ele2) {
       var arr = ele1.childNodes;
       var newarr = [];

       //判断条件，nodeType===1，就是他的子元素
       for (var i=0;i<arr.length;i++){
           if (arr[i].nodeType === 1){
               newarr.push(arr[i]);
           }
       }
       console.log(newarr.length);
       
       //ele2的子元素
      console.log( typeof ele2 ==='string');
      if (typeof ele2 ==='string'){

      }
   }

   ChildernNode(bigBox,'div');

};