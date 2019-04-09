window.onload = function () {
    var box = document.getElementById('box');

    //获取兄的节点
   function presiblings(ele) {
      var pre = ele.previousSibling;
      console.log(pre);
      while (pre&&pre.nodeType!==1){
          pre=pre.previousSibling;
      }
      return pre;
   }

    function nextsiblings(ele) {
        var next = ele.previousSibling;
        console.log(next);
        while (next&&next.nodeType!==1){
            next=next.previousSibling;
        }
        return next;
    }

      var result = presiblings(box);
      var nextres = nextsiblings(box);

     console.log(result+'这就是结果');

     console.log(nextres+'这就是弟的节点获取结果');


};