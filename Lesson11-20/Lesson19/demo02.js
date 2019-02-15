var MyProxy = /** @class */ (function () {
    function MyProxy(value) {
        this.value = value;
    }
    MyProxy.prototype.get = function () {
        return this.value;
    };
    MyProxy.prototype.set = function (value) {
        this.value = value;
    };
    return MyProxy;
}());
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var student = new Student();
student.name = "Jim";
student.age = 12;
var myStudentProxy = new MyProxy(student);
var stuProxify;
// stuProxify.age.get
// stuProxify.age.set
function myProxify(o) {
    var result = {};
    for (var k in o) {
        result[k] = new MyProxy(o[k]);
    }
    return result;
}
var annyProxify = myProxify({
    name: "Anny",
    age: 15
});
console.log(annyProxify);
annyProxify.name.set("Kite");
annyProxify.age.set(20);
console.log(annyProxify);
function unproxify(t) {
    var result = {};
    for (var k in t) {
        result[k] = t[k].get();
    }
    return result;
}
var orgAnny = unproxify(annyProxify);
console.log(orgAnny);
