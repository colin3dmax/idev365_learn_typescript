function pluck2(o,names){
    return names.map(n=>o[n])
}

console.log( pluck2({name:"Jim",age:20,gender:'male'},["name","age"])  )


function pluck<T,K extends keyof T>(o:T,names:K[]):T[K][]{
    return names.map(n=>o[n])
}
console.log( pluck({name:"Jim",age:20,gender:'male'},["name","age"])  )


interface Person {
    name:string;
    age:number;
}

let person:Person = {
    name:'Jarid',
    age:35
}

let personProps:keyof Person
let personProps2:'name'|'age'

function getProperty<T,K extends keyof T>(o:T,name:K):T[K]{
    return o[name]
}

console.log( getProperty(person,"name") )
console.log( getProperty(person,"age") )


interface MyMap<T>{
    [key:string]:T;
}

let keys: keyof MyMap<number>;
let value:MyMap<number>['foo']


interface PersonPartial {
    name?:string;
    age?:string;
}

interface PersonReadonly{
    readonly name:string;
    readonly age:number;
}

type MyReadonly<T> = {
    readonly [P in keyof T]:T[P]
}

type  MyPersonReadonly = MyReadonly<Person>;

type MyPartial<T>={
    [P in keyof T]?:T[P]
}

type MyPersonPartial = MyPartial<Person>

type Keys = "option1" | 'option2'
type Flags = { [K in Keys]:boolean }
type FlagStrings = { [K in Keys]:string }

type NullablePerson = { [P in keyof Person]: Person[P]|null }

let nullablePerson:NullablePerson


type PartialPerson = { [P in keyof Person]?:Person[P]}

type Nullable<T> =  { [P in keyof T]: T[P]|null }
type MyPartial2<T> =  { [P in keyof T]?: T[P] }
















