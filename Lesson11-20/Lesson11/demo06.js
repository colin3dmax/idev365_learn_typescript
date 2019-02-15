var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BeeKeeper = /** @class */ (function () {
    function BeeKeeper(hasMask) {
        this.hasMask = hasMask;
    }
    return BeeKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper(nametag) {
        this.nametag = nametag;
    }
    return ZooKeeper;
}());
var Animal = /** @class */ (function () {
    function Animal(numLegs) {
        this.numLegs = numLegs;
    }
    return Animal;
}());
var Bee = /** @class */ (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        var _this = _super.call(this, 4) || this;
        _this.keeper = new BeeKeeper(true);
        return _this;
    }
    return Bee;
}(Animal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        var _this = _super.call(this, 4) || this;
        _this.keeper = new ZooKeeper("ABC");
        return _this;
    }
    return Lion;
}(Animal));
function createInstance(c) {
    return new c();
}
console.log(createInstance(Lion).keeper.nametag);
console.log(createInstance(Bee).keeper.hasMask);
