window.onload = function () {
    //约瑟夫环,从3开始报数
    li = ['李一','李二','李三','李四','李五','李六','李七','李八','李九','李十'];
    n = 0;//次数
    start  = 0;//下标
    function circle(num) {
        while (li.length > 1) {
            n+=1;
            start += num-1;
            console.log('下标为:'+start,'此时数组为:'+li);
start %= li.length//如果下标超出数组的长度做取余处理
console.log('第'+n+'次删除的是:'+li.splice(start,1));
}
console.log('最终留下来的是',li)
}
circle(3)//里面填入从哪个数字开始报数
};