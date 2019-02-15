function identity<T>(arg:T):T{
    return arg;
}

let myIdentity:<U>(arg:U)=>U = identity;

let myIdentity2:{<T>(arg:T):T} = identity;

