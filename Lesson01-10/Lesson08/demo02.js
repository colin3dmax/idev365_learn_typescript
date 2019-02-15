function buildName(firstName) {
    if (firstName === void 0) { firstName = "Andy"; }
    var resetOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        resetOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + resetOfName.join(" ");
}
var result1 = buildName("Bob", "Adams");
console.log(result1);
var result2 = buildName();
console.log(result2);
var result3 = buildName("Bob", "Andy", true);
console.log(result3);
