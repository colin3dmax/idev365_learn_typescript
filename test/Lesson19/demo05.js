var Girl = /** @class */ (function () {
    function Girl() {
    }
    return Girl;
}());
var girl;
var girlRecord;
// type MyProxy<T> = {
//     get():T;
//     set(value:T):void;
// }
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
var MyBoy = /** @class */ (function () {
    function MyBoy() {
    }
    return MyBoy;
}());
function myProxify(o) {
    var result = {};
    for (var k in o) {
        result[k] = new MyProxy(o[k]);
    }
    return result;
}
function unproxify(t) {
    var result = {};
    console.log("unproxify--->in", t);
    for (var k in t) {
        console.log("k->", k, "---t[k]", t[k], "---t[k].get()", t[k].get());
        result[k] = t[k].get();
    }
    return result;
}
var boy = new MyBoy();
var myProxifyBoy = myProxify({
    name: "123",
    age: 30,
    gender: "male"
});
myProxifyBoy.gender.set("female");
console.log(myProxifyBoy);
// myProxifyBoy.age.get()
// let orginalProps = unproxify(myProxifyBoy)
// // orginalProps.age
// // orginalProps.name
