var Proxy2 = /** @class */ (function () {
    function Proxy2(value) {
        this.value = value;
    }
    Proxy2.prototype.get = function () {
        return this.value;
    };
    Proxy2.prototype.set = function (value) {
        this.value = value;
    };
    return Proxy2;
}());
function proxify(o) {
    var result = {};
    for (var k in o) {
        result[k] = new Proxy2(o[k]);
    }
    return result;
}
var myInfo = proxify({
    name: "ABC",
    age: 12
});
myInfo.name.set("ABC");
console.log(myInfo);
