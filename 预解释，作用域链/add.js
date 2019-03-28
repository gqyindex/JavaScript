window.onload = function () {
    /*var count = 1;
  var btn= document.getElementById('btn');
  btn.onclick = function () {
      btn.innerText = count++
 }*/
    var btn= document.getElementById('btn');
    btn.count =0;
    btn.onclick = function () {
        btn.innerText = ++this.count
    }

}
