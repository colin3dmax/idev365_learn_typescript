// let [,second,,fouth] = [1,2,3,4]
// console.log(second,fouth)

let o = {
    a:"foo",
    b:12,
    c:'bar',
}

// let {b,c} = o;
// console.log(b,c)

// let {a,b}={a:"abc",b:101}


let {a:stuName,b:age} = o;
console.log(stuName,age)

function keepWholeObject(wholeObject:{a:string,b?:number}){
    let {a,b=1001} = wholeObject;
    console.log(a,b)
}

keepWholeObject({a:"Jimmy",b:102})

function f({a="山地人",b=0}:{a?:string,b?:number}):void{
    console.log(`a:${a} b:${b}`)
}

f({})