var C2Proxy = /** @class */ (function () {
    function C2Proxy(value) {
        this.value = value;
    }
    C2Proxy.prototype.get = function () {
        return this.value;
    };
    C2Proxy.prototype.set = function (value) {
        this.value = value;
    };
    return C2Proxy;
}());
function proxify(o) {
    var result = {};
    for (var k in o) {
        result[k] = new C2Proxy(o[k]);
    }
    return result;
}
function unproxify(t) {
    var result = {};
    for (var k in t) {
        result[k] = t[k].get();
    }
    return result;
}
var props = {
    a: "XXX",
    b: 12
};
var proxyProps = proxify(props);
proxyProps.a.set("Hello");
var props2 = unproxify(proxyProps);
console.log(props2);
