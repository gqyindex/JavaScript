var str = '12345678';
var temp = null;
str = str + '';

for (var i = 0;i <re(str).length;i++){
  temp +=re(str)[i-1];
  if (i%3 === 0&&i!==re(str).length){
      temp +=''
  }
   console.log(temp);
}

function re(str) {
        return str.split("").reverse().join("");
    }
