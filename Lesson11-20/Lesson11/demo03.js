var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenNum = new GenericNumber();
myGenNum.zeroValue = 0;
myGenNum.add = function (x, y) {
    return x + y;
};
console.log(myGenNum.add(2, 3));
var myGenStr = new GenericNumber();
myGenStr.zeroValue = "";
myGenStr.add = function (x, y) { return x + " " + y; };
console.log(myGenStr.add("abc", "123"));
