class GenericNumber<T>{
    zeroValue:T;
    add:(x:T,y:T)=>T;
}

let myGenNum = new GenericNumber<number>();
myGenNum.zeroValue = 0
myGenNum.add = function(x,y){
    return x+y;
}

console.log(myGenNum.add(2,3))

let myGenStr = new GenericNumber<string>();
myGenStr.zeroValue = ""
myGenStr.add = function(x,y){ return x+" "+y}
console.log(myGenStr.add("abc","123"))