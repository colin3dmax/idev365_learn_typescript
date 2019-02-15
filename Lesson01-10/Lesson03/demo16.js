var C = (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () {
        return "ABC";
    };
    return C;
})();
var c = new C();
var clone = { c: c };
console.log(clone.p);
console.log(clone.m());
