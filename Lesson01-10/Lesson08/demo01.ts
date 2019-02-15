function add(x:number,y:number):number{
    return x+y;
}

let myAdd:(x:number,y:number)=>number = function(x:number,y:number):number{
    return x+y;
}

let z = 100;
function addToZ(x:number,y:number):number{
    return x+y+z;
}

console.log(addToZ(2,3))

let myAdd2:(baseValue:number,increment:number)=>number = function(x:number,y:number):number{
     return x+y 
}

let myAdd3 = function(x:number,y:number):number{
    return x+y;
}
