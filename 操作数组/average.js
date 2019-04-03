window.onload = function () {
    //求取平均数，减去最大的值和最小的值
    function avg() {
        Array.prototype.slice.call(arguments,function (a,b) {
            return a - b;
        });
        [].shift.call(arguments);
        [].pop.call(arguments);
        var result = (eval([].join.call(arguments,"+"))/arguments.length).toFixed(3);
        return result;
    };
    var res = avg(45,234,5656,12,123,767,898,453);
    console.log(res);

}