window.onload = function () {
    var box = document.getElementById('box');
    var banner = document.getElementById('banner');
    var ulObj = document.getElementById('ulObj');
    var pointList = document.getElementById('pointList');
    var arrow = document.getElementById('arrow');
    var arrLeft = document.getElementById('left');
    var arrRight = document.getElementById('right');
    var timer = setInterval(autoplay,1000);
    var k = 0;

    //加载数据
    var xhr = new XMLHttpRequest();
    xhr.open('get','db.json');
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (this.readyState !== 4){
            return
        } else {
            var data = JSON.parse(this.responseText);
            show(data);
        }
    };

    //数据渲染
    function show(data) {
        var str = '';
        var point = '';
        for (var i=0;i<data.length;i++){
           str += '<li><img src="'+data[i].url+'" id="image"></li>';
           point +='<li></li>';
        }
        //这里注意innerHTML和innerText的区别
        ulObj.innerHTML = str;
        pointList.innerHTML = point;
        pointList.firstChild.className = 'selected';
    }

    //自动轮播
    function autoplay() {
        k++;
        if ( k<ulObj.childNodes.length) {
            ulObj.style.left = -(ulObj.offsetWidth/ulObj.childNodes.length) * k+'px';
        }else {
            ulObj.style.left=0+'px';
            k=0;
        }
        point(k);
    }

    //焦点对齐
    function point(index) {
        for (var j=0;j<pointList.childNodes.length;j++){
            pointList.childNodes[j].className=null;
        }
        pointList.childNodes[index].className = 'selected';
        /*Leftchange(index);*/
    }


    //鼠标控制自动轮播的停止播放
    box.onmouseenter = function () {
        clearInterval(timer);
        arrow.style.display = 'block';
    };

    box.onmouseleave = function () {
        timer = setInterval(autoplay,1000);
        arrow.style.display = 'none';
    };

    //左右按键点击切换
  /* function Leftchange(index){

   }*/
  arrRight.onclick = function () {
      autoplay();
  }

  arrLeft.onclick = function () {
      k--;
      if ( k>=0&&k<ulObj.childNodes.length) {
          ulObj.style.left = -(ulObj.offsetWidth/ulObj.childNodes.length) * k+'px';
          console.log(ulObj.style.left);

      }else {
          console.log(k)
          ulObj.style.left=(ulObj.offsetWidth/ulObj.childNodes.length)*(k-1)+'px';
          k=ulObj.childNodes.length;
      }
  }



};