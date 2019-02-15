var MySquare = /** @class */ (function () {
    function MySquare(size) {
        this.size = size;
        this.kind = "square";
    }
    return MySquare;
}());
var MyRectangle = /** @class */ (function () {
    function MyRectangle(width, height) {
        this.width = width;
        this.height = height;
        this.kind = "rectangle";
    }
    return MyRectangle;
}());
var MyCircle = /** @class */ (function () {
    function MyCircle(radius) {
        this.radius = radius;
        this.kind = "circle";
    }
    return MyCircle;
}());
var MyTriangle = /** @class */ (function () {
    function MyTriangle(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.kind = "triangle";
    }
    return MyTriangle;
}());
function assertNever(x) {
    throw new Error("Unexpected object:" + x);
}
function area(s) {
    console.log("s->", s);
    var totalArea = 0;
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.width * s.height;
        case "circle":
            return Math.PI * Math.pow(s.radius, 2);
        // case "triangle": 
        //     return 20;
        default:
            return assertNever(s);
    }
}
console.log("area->", area(new MyTriangle(3, 4, 5)));
