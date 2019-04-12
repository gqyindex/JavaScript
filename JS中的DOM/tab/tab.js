window.onload = function () {
    var liList = document.getElementsByTagName('li');
    var box = document.getElementById('box');
    var divList = box.getElementsByTagName('div');

       function changeTab(index) {
              for (var i=0;i<liList.length;i++){
                  liList[i].className = null;
                  divList[i].className = null;
              }
           liList[index].className = 'selected';
           divList[index].className = 'show';
       }

       //用自定义变量的方法实现
       /*for (var j=0;j<liList.length;j++){
           liList[j].index = j;
           liList[j].onclick = function () {
               changeTab(this.index);
           }
       }*/

       //用函数闭包方法实现
       for (var j=0;j<liList.length;j++){
           ~function (j) {
               liList[j].onclick = function () {
                   changeTab(j)
               }
           }(j);
       }
};