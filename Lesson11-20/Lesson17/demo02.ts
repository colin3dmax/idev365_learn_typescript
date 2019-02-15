type Alias = { num:number }

interface Interface {
    num:number
}

declare function aliased(arg:Alias):Alias;
declare function interfaced(arg:Interface):Interface;

class A implements Alias {
    num:number;
}

let a = new A()
a.num = 123;
console.log(a.num)














