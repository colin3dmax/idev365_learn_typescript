function f(x) {
    var x;
    var x;
    if (true) {
        var x;
    }
}
function f1(x) {
    // let x;
}
// let x = 10;
// let x;
function g() {
    var x = 100;
    console.log("func g block->x", x);
    if (true) {
        var x_1 = 5;
        console.log("if block x", x_1);
    }
    console.log("func g block->x", x);
}
g();
