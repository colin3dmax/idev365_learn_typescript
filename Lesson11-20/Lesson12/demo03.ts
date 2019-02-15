enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius:number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength:number;
}

let c:Circle = {
    kind: ShapeKind.Circle,
    radius:100,
}

enum E {
    Foo,
    Bar,
}

function f(x:E){
    if(x!==E.Foo && x!= E.Bar){

    }
}