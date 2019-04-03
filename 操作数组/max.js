window.onload = function () {
    var arr = [12,54,7657,34543,1,2343,89,23,123];

    //方法一
    var max = arr[0];
    for (var i = 0;i < arr.length;i++){
        max = max > arr[i] ? max:arr[i]
    }
    console.log(max);

    //方法2
    var newarr = arr.sort(function (a,b) {
        return a - b
    });
    console.log(newarr[newarr.length-1]);

    //方法三
    var max_Math = Math.max.apply(null,arr);
    console.log(max_Math);



}