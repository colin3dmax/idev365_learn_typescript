interface Square{
    kind:"square";
    size:number;
}
class MySquare implements Square{
    public kind:"square"="square";
    constructor(public size:number){}
}

interface Rectangle{
    kind:"rectangle";
    width:number;
    height:number;
}
class MyRectangle implements Rectangle{
    public kind:"rectangle"="rectangle";
    constructor(public width:number,public height:number){}
}

interface Circle{
    kind:"circle";
    radius:number;
}

class MyCircle implements Circle{
    public kind:"circle"="circle";
    constructor(public radius:number){}
}


interface Triangle{
    kind:"triangle";
    sideA:number;
    sideB:number;
    sideC:number;
}

class MyTriangle implements Triangle{
    public kind:"triangle"="triangle";
    constructor(
        public sideA:number,
        public sideB:number,
        public sideC:number    
    ){}
}


type Shape = Square | Rectangle | Circle | Triangle;

function assertNever(x:never):never{
    throw new Error("Unexpected object:"+x)
}

function area(s:Shape):number{
    console.log("s->",s)
    let totalArea = 0;
    switch(s.kind){
        case "square":
            return s.size*s.size;
        case "rectangle": 
            return s.width*s.height;
        case "circle": 
            return Math.PI*s.radius**2;
        // case "triangle": 
        //     return 20;
        default:
            return assertNever(s);
    }
}

console.log("area->",area(new MyTriangle(3,4,5)))


