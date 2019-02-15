function pluck<T,K extends keyof T>(o:T,names:K[]):T[K][]{
    return names.map(n=>o[n])
}

interface Person {
    name:string;
    age:number;
    gender:"male"|"female"
}

let person:Person = {
    name:"Jim",
    age:20,
    gender:'male',
}

let strings:string[] = pluck(person,['name'])
console.log(strings)


let personProps:keyof Person;
let personProps2:"name"|"age";

function getProperty<T,K extends keyof T>(o:T,name:K):T[K]{
    return o[name]
}

let pName:string = getProperty(person,'name')
let pAge:number = getProperty(person,'age')
let pGender = getProperty(person,'gender')

interface MyMap<T>{
    [key:string]:T;
}

let keys:keyof MyMap<number>;
let value:MyMap<boolean>["foo"];

console.log(typeof keys)














