function f(sn:string|null):string{
    if(sn == null){
        return "default"
    }else{
        return sn;
    }
}

console.log("---------------1")
console.log(f(""))
console.log(f("abc"))
console.log(f(null))
console.log(f(undefined))


function f2(sn:string|null):string{
    return sn || "default"
}
console.log("---------------2")
console.log(f2(""))
console.log(f2("abc"))
console.log(f2(null))
console.log(f2(undefined))

function f3(sn:string|null):string{
    return sn==null ? "default" : sn
}

console.log("---------------3")
console.log(f3(""))
console.log(f3("abc"))
console.log(f3(null))
console.log(f3(undefined))

