function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("DigitalClock tick()");
    };
    return DigitalClock;
}());
var currentColock = createClock(DigitalClock, 5, 20);
currentColock.tick();
