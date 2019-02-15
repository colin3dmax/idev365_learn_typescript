// let [,second,,fouth] = [1,2,3,4]
// console.log(second,fouth)
var o = {
    a: "foo",
    b: 12,
    c: 'bar'
};
// let {b,c} = o;
// console.log(b,c)
// let {a,b}={a:"abc",b:101}
var stuName = o.a, age = o.b;
console.log(stuName, age);
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(a, b);
}
keepWholeObject({ a: "Jimmy", b: 102 });
function f(_a) {
    var _b = _a.a, a = _b === void 0 ? " 山地人" : _b, _c = _a.b, b = _c === void 0 ? 0 : _c;
    console.log("a:" + a + " b:" + b);
}
f({});
