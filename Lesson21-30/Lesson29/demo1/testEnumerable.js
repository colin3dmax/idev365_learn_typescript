var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function enumerable(isEnumerable) {
    return function (target, propName, descriptor) {
        console.log("descriptor", descriptor);
        descriptor.enumerable = isEnumerable;
    };
}
var Greeter3 = /** @class */ (function () {
    function Greeter3(message) {
        this.greeting = message;
    }
    Greeter3.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    __decorate([
        enumerable(false)
    ], Greeter3.prototype, "greet", null);
    return Greeter3;
}());
for (var key in Greeter3.prototype) {
    console.log("key--->", key);
}
