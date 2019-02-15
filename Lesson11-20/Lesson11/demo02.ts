interface GenericIdentityFn<T>{
    (arg:T):T;
}

function identity2<T>(arg:T):T{
    return arg;
}

let myIdString:GenericIdentityFn<string> = identity2

let myIdNumber:GenericIdentityFn<number> = identity2


console.log(  myIdString("Hello") )
console.log( myIdNumber(123) )