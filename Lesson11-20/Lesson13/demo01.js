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
var x = null;
var y = [0, 1, null];
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Rhino = /** @class */ (function () {
    function Rhino() {
    }
    return Rhino;
}());
var Elephant = /** @class */ (function (_super) {
    __extends(Elephant, _super);
    function Elephant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Elephant;
}(Animal));
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Snake;
}(Animal));
var zoo = [new Rhino(), new Elephant(), new Snake()];
// window.onmousedown = function(mouseEvent:any) {
//     console.log(mouseEvent.button);  //<- Error
// };
function createZoo() {
    return [new Rhino(), new Elephant(), new Snake()];
}
