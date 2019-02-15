function getCounter() {
    var counter = function (start) { return start + ""; };
    console.log("counter", counter);
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
console.log(c(20));
