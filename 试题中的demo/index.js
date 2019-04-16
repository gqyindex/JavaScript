window.onload = function () {
    var radioList = document.getElementsByTagName("input");
    for (var i=0;i<radioList.length;i++){
        //正确做法
       /* radioList[i].index = i;
        radioList[i].onclick = function () {
            this.setAttribute('checked',true);
            console.log(this.index);
        }*/

       //错误做法
        for (var i =0;i<radioList.length;i++){
            console.log("ok");
            if (radioList[i].checked){
                console.log(i+1);
            }
        }
    }

}