var input = [1, 2];
var first = input[0], second = input[1];
_a = [second, first], first = _a[0], second = _a[1];
console.log("first:", first);
console.log("second:", second);
function swap(_a) {
    var first = _a[0], second = _a[1];
    return [second, first];
}
console.log(swap([1, 2]));
var _a;
