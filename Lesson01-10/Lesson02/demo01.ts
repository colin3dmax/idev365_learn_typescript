// 布尔值 boolean
let isDone: boolean = false;
let isDoneNow: boolean = true;
let isDoneString: boolean = true;

//数字 number
let decLiteral:number = 1;
let hexLiteral:number = 0xff00f;
let binaryLiteral:number = 0b1001;
let octalLiteral:number = 0o7340;

// 字符串 string
let studentName: string = '山地人';
studentName = "Jim";

let age:number = 20;

console.log(`I'm ${studentName}. My age is ${age}. ${age>18?'成年':"未成年"}`)

// 数组
let list:number[] = [1,2,3]
let list2:Array<number>=[1,2,3]

// 元组 Tuple
let x:[string,number];
x = ['hello',30]
// x = [30,'hello']

console.log(x[0])
console.log(x[1])

x[3]='world'
console.log(x[3])

//枚举
enum Color {Red,Green,Blue}
console.log(Color)
console.log(Color.Blue)

let c:Color = Color.Red

console.log(Color[2])

// Any
let notSure:any = true;
let notSure2:any = 123;
let notSure3:any = "Jim";

let list3:any[] = [1,true,"free"]
// list[0]="ABC"

function warnUser():void{
    console.log("This is my warning message")
}

let unusable:void = null


// Never
// function error(message:string):never{
//     throw new Error(message)
// }

// function fail(){
//     return error("Something failed")
// }

// function infiniteLoop():never{
//     while(true){

//     }
// }

let someValue:any = "this is a string"
let strLength:number = (<string>someValue).length
console.log(strLength)


// strLength2:number = (someValue as string).length;
// console.log(strLength2)