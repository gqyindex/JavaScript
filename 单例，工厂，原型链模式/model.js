window.onload = function () {

    //工厂模式
    function Person(name,age) {
        var obj = {};
        obj.name = name;
        obj.age = age;
        return obj;
    }

    var person = Person('耿晴雨','21');
    console.log(person.name);
    console.log(person.age);

    var person1 = Person('许晨','23');
    console.log(person1.name);
    console.log(person1.age);

    //构造函数
    function CreatePerson(name,age) {
        this.name = name;//this分别指向实例
        this.age = age;
    }
    //与工厂模式的区别是：
                     //createPerson是一个实例，CreatePerson是一个类
                     //浏览器默认创建实例，默认return
    var createPerson = new CreatePerson('耿晴','22');
    console.log(createPerson);//实例是一个object
    console.log(CreatePerson);//类是一个function
    console.log(createPerson.name);
    console.log(createPerson.age);

    var createPerson1 = new CreatePerson('晨许','22');
    console.log(createPerson1.name);
    console.log(createPerson1.age);

    function outer() {
        var num = 1;
        function inner() {
            var n =2;
            alert(n + num);
        }
        return inner()
    }
    outer();
}