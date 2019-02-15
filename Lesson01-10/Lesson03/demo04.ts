function f(shouldInitialize:boolean){
    if(shouldInitialize){
        var x = 10;
    }
    return x;
}

console.log(f(true))
console.log(f(false))