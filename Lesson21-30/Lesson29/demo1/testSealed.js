function sealed(constructor) {
    console.log("sealed-->get->constructor", constructor);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
// @sealed
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log("greet");
    };
    Greeter.hello = function () {
        console.log("Hello");
    };
    return Greeter;
}());
new Greeter("Jimmy").greet();
// delete Greeter.prototype.greet
// Greeter.prototype.say=function(){
//     console.log("say->>")
// }
// new Greeter("Jimmy").say()
