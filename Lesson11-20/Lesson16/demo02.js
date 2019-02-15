function f(x, y) {
    console.log(y);
    return x + (y || 0);
}
// console.log( f(1,2) )
// console.log( f(1) )
// console.log( f(1,null) )
// console.log( f(1,undefined) )
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var test = new C();
test.a = 12;
test.a = undefined;
test.b = 13;
test.b = undefined;
test.b = null;
