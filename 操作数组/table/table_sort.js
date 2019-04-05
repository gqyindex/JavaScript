window.onload = function () {
   var title = document.getElementById('title');
   var content = document.getElementById('content');
   var conrows = content.rows;
   //获取json数据，渲染到表格
   var xhr = new XMLHttpRequest();
   xhr.open('get','info.json');
   xhr.send(null);
   xhr.onreadystatechange = function () {
       if (this.readyState===4 &&this.status===200){
          var res = this.responseText;
          showData(res);
       }else {
           return "服务器忙，再试试吧";
       }
   };

   function showData(res) {
      var data =  eval('(' + res + ')');
      //渲染表格
      for (var i=0;i<data.length;i++){
           var trObj = document.createElement('tr');
           for (var key in data[i]){
              var thObj = document.createElement('th');
                 if (key==='gender'){
                     thObj.innerText = data[i][key]==0?'男':'女';
                 }else {
                     thObj.innerText = data[i][key];
                 }
              trObj.appendChild(thObj);
           }
           content.appendChild(trObj);
      }
       }

     //点击排序
       function sortData(that,index) {
                   flag = -1*flag;
                   var tr_arr = [];
                   for (var i=0;i<conrows.length;i++){
                       tr_arr.push(conrows[i]);
                   };
                   tr_arr.sort(function (a,b) {
                       return (parseFloat(a.cells[index-1].innerHTML)-parseFloat(b.cells[index-1].innerHTML))*flag;
                   });

                   //排序后的结果重新渲染
                   for (var j = 0;j<tr_arr.length;j++){
                       content.appendChild(tr_arr[j]);
                   }
               };

    /*    title.cells[1].onclick = function () {
            console.log(this);
            flag = -1*flag;
            var tr_arr = [];
            for (var i=0;i<conrows.length;i++){
                tr_arr.push(conrows[i]);
            };
           tr_arr.sort(function (a,b) {
               return (parseFloat(a.cells[1].innerHTML)-parseFloat(b.cells[1].innerHTML))*flag;
           });

           //排序后的结果重新渲染
           for (var j = 0;j<tr_arr.length;j++){
               content.appendChild(tr_arr[j]);
           }
        }*/

       var flag = -1;
       for (var k = 0;k< title.cells.length;k++){
            var cur = title.cells[k];
            cur.index = k;
            cur.onclick = function () {
              sortData(this,cur.index);
          }
    }
};

