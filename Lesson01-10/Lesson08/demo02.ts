function buildName(firstName:string="Andy",...resetOfName:string[]){
    return firstName + " " + resetOfName.join(" ")
}

let result1 = buildName("Bob","Adams")
console.log(result1)


let result2 = buildName() 

console.log(result2)

let result3 = buildName("Bob","Andy","ABC")

console.log(result3)

let func2:(firstName:string,...rest:string[])=>string = function(firstName:string="Andy",...resetOfName:string[]){
    return firstName + " " + resetOfName.join(" ")
}
