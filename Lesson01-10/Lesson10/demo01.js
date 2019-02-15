function id(arg) {
    return arg;
}
console.log(id("abcd001"));
function identity(arg) {
    console.log(arg.length);
    return arg[0];
}
console.log(identity(["ABC"]));
console.log(identity([123]));
console.log(identity(["ABC"]));
console.log(identity([123]));
