function identity2(arg) {
    return arg;
}
var myIdString = identity2;
var myIdNumber = identity2;
console.log(myIdString("Hello"));
console.log(myIdNumber(123));
