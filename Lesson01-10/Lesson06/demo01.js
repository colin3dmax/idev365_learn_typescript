var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.sayHello = function () {
        console.log("Hi,Coder");
    };
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
greeter.sayHello();
// console.log(greeter.greet())
