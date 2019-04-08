window.onload = function () {
     var outer = document.getElementById('outer');
     var inner = document.getElementById('inner');
     var content = document.getElementById('content');

    outer.style.position = 'relative';
    console.log(outer.offsetParent);//body
    console.log(inner.offsetParent);//outer
    console.log(content.offsetParent);//outer

    inner.style.position = 'absolute';
    console.log(outer.offsetParent);//body
    console.log(inner.offsetParent);//outer
    console.log(content.offsetParent);//inner
    console.log(outer.clientHeight);//width
    

};