var Grid = /** @class */ (function () {
    function Grid(scale, name) {
        this.scale = scale;
        this.name = name;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.prototype.printScale = function () {
        console.log("this.scale", this.scale);
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0, "Grid01");
var grid2 = new Grid(5.0, "Grid02");
grid1.printScale();
grid2.printScale();
console.log(Grid.origin);
console.log(grid1.name);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
