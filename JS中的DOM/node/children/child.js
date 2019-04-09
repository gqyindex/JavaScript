window.onload = function () {
    var bigBox = document.getElementById('bigBox');

   function ChildernNode(ele1,ele2) {

           var newarr = [];
           var arr = ele1.childNodes;
           //判断条件，nodeType===1，就是他的子元素
           for (var i=0;i<arr.length;i++){
               if (arr[i].nodeType === 1){
                   newarr.push(arr[i]);
               }
           }

           //ele2
         if (typeof ele2 ==='string'){
             for (var j=0;j<newarr.length;j++){
                 if (newarr[j].nodeName.toLocaleLowerCase() !== ele2.toLocaleLowerCase()){
                     newarr.splice(j,1);
                     j--;
                 }
             }
         }
         console.log(newarr);
       }

   ChildernNode(bigBox,'span');

}