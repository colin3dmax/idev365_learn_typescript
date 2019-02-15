var SpaceRepeatingPadder = /** @class */ (function () {
    function SpaceRepeatingPadder(numSpaces) {
        this.numSpaces = numSpaces;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpaces + 1).join(" ");
    };
    SpaceRepeatingPadder.prototype.print = function () {
        console.log("I'm SpaceRepeatingPadder");
    };
    return SpaceRepeatingPadder;
}());
console.log("1234567890");
console.log(new SpaceRepeatingPadder(5).getPaddingString() + "|");
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    StringPadder.prototype.say = function () {
        console.log("I'm StringPadder");
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}
var padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder.print();
}
if (padder instanceof StringPadder) {
    padder.say();
}
