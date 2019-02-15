interface Named {
    name: string;
}

class Person {
    name: string;
    age: number;
}

let p:Named;

p = new Person()

let x:Named;
let y = { name:"Alice",location:'Seattle'}
x = y

function greet(n:Named){
    console.log("Hello, "+n.name)
}

greet(y)

let x1 = (a:number)=>0;
let y1 = (b:number,s:string)=>0;

y1 = x1
// x1 = y1