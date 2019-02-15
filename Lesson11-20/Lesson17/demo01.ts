type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n:NameOrResolver):Name{
    if(typeof n === 'string'){
        return n;
    }else{
        return n();
    }
}

console.log( getName("山地人") )


console.log( getName(()=>{
    return "Hello World"
}) )


type Container<T> = { value:T };
type Tree<T> = {
    value:T;
    left:Tree<T>;
    right:Tree<T>;
}


type LinkedList<T> = T & { next:LinkedList<T>};

interface Person{
    name:string;
}

class Girl<T> implements Person{
    next:LinkedList<T>
    constructor(public name:string){}
}

var person:LinkedList<Person> = new Girl("Anny")
var s = person.name;
console.log(s)
console.log(person.next)
// var s1 = person.next.next.next.next.name;

var ct:Container<number> = {value:123};
console.log(ct.value)

var ct2:Container<string> = { value: "ABC" }
console.log(ct2.value)

type Yikes = Array<number>;















