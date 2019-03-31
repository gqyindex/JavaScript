window.onload = function () {

    function Fn(name,age) {
        this.name = name;
        this.age = age;
    };

    Fn.prototype.getName = function () {
      console.log(this.name)
    };

    var f1 = new Fn('耿晴雨','21');
    var f2 = new Fn('小辣鸡','22');
    f1.getName();
    f2.getName();

    console.log(Fn.prototype.constructor);//返回属性值当前的类
    console.log(f1.__proto__);//返回所属类的原型方法
    console.log(f2.__proto__);

    //原型链方法实现数组去重
    Fn.prototype.removeSame = function () {
        var result = {};
        var newarr =[];
        for (var i = 0;i<arr.length;i++){
            if (!result.hasOwnProperty(arr[i])){
                newarr.push(arr[i]);
                result[arr[i]] = arr[i];
            }
        }
        //console.log(newarr);
        return newarr
    }
    var arr = [1,2,3,4,45,2,3,1];
    var result = new Fn(arr);
    var newarr = result.removeSame();
    console.log(newarr);

    //实现数组排序方法
    var sortarr = [345,675,1,23,89,4566,5];
    console.log(sortarr.sort(function (a,b) {
        return a-b;
    }));

}