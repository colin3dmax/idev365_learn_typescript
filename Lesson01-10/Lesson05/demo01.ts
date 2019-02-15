interface StringArray {
    [index:number]:string,
}

let myArray:StringArray
myArray = ['Bob','Fred']

let myStr:string = myArray[0]

console.log(myStr)


class Animal {
    name:string
}

class Dog extends Animal {
    breed:string;
}

interface NotOkay{
    [x:number]:Animal,
    [x:string]:Animal
}

interface NumberDictionary{
    readonly [index:string]:number,
    length:number,
    name:number
}

interface ReadonlyStringArray {
    readonly [index:number]:string,
}

let myArray2:ReadonlyStringArray = ['Alice','Bob']
// myArray2[1] =  'Jimmy'