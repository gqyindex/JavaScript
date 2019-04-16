var Obj = [];
var _a = NaN;
// var obj = //;
var obj1 = {};
// var obj2 = ();

console.log(Obj);
console.log(_a);
console.log(obj1);
// console.log(obj2);

//a+b结果为NAN
/*var a = undefined;
var b = NaN;*/
/*var a = '12334';
var b = NaN;*/
var a = NaN,b = 'undefined';
console.log("结果为"+(a+b));

console.log(null instanceof Object);

/*数据类型*/
console.log("String的数据类型"+typeof String);
console.log("boolean的数据类型"+typeof Boolean);
console.log("null的数据类型"+typeof null);
console.log("undefined的数据类型"+typeof undefined);
console.log("Number的数据类型"+typeof Number);
console.log("Object的数据类型"+typeof  Object);
console.log("=========>>>");

var str = "<div>这是一个<p>段落</p></div>"
var reg = /<\/?\w+\/?>/gi;
console.log(str.replace(reg,""));
