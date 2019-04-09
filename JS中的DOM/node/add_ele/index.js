window.onload = function () {
    var box = document.getElementById('box');
    var text = document.getElementById('text');

    //在父节点中添加元素
    function append(newele,container) {
        return container.appendChild(newele);
    }

    //添加一个元素在父元素的最前面
    function preappend(newele,container) {
        //如果父容器有第一个元素，就Insert
        if ( container.firstElementChild){
            container.insertBefore(newele,container.firstElementChild);
            return
        }
        //没有第一个元素就直接加
        container.appendChild(newele);
    }

    //插入指定对象的后面
    function insertAfter(newele,targetele) {
       var next = getNext(targetele);
       if (next){
           targetele.parentNode.insertBefore(newele,next);
       }
       targetele.parentNode.appendChild(newele);
    }

    function getNext(curEle) {
        var temp = curEle.nextSibling;
        while (temp) {
            if (temp.nodeType === 1) {
                return temp;
            }
            temp = temp.nextSibling;
        }
    }

    var span = document.createElement('span');
    append(span,box);

    var h2 = document.createElement('h2');
    preappend(h2,box);

    var h5 = document.createElement('h5');
    insertAfter(h5,text);
};