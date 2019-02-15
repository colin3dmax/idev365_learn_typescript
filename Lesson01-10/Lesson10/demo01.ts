function id(arg:any):any{
    return arg;
}

console.log(id("abcd001"))

function identity<T>(arg:T[]):T{
    console.log(arg.length)
    return arg[0];
}

function identity2<T>(arg:Array<T>):T{
    console.log(arg.length)
    return arg[0];
}


console.log(identity<string>(["ABC"]))
console.log(identity<number>([123]))


console.log(identity(["ABC"]))
console.log(identity([123]))