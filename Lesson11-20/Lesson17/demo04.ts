interface Square{
    kind:"square";
    size:number;
}

interface Rectangle{
    kind:'reactagle';
    width:number;
    height:number;
}

interface Circle{
    kind:"circle";
    radius:number;
}

interface Triangle{
    kind:'triangle';
    aSide:number;
    bSide:number;
    cSide:number;
}

type Shape = Square | Rectangle | Circle | Triangle;

function assertNever(x:never):never{
    throw new Error("Unexpected object:"+x)
}

function area(s:Shape):number{
    switch(s.kind){
        case "square":return s.size*s.size;
        case "reactagle":return s.width*s.height;
        case "circle":return Math.PI*s.radius**2;
        case "triangle":return 0
        default:
            return assertNever(s);
    }
}


// console.log( area() )