// 布尔值 boolean
var isDone = false;
var isDoneNow = true;
var isDoneString = true;
//数字 number
var decLiteral = 1;
var hexLiteral = 0xff00f;
var binaryLiteral = 9;
var octalLiteral = 3808;
// 字符串 string
var studentName = '山地人';
studentName = "Jim";
var age = 20;
console.log("I'm " + studentName + ". My age is " + age + ". " + (age > 18 ? '成年' : "未成年"));
// 数组
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// 元组 Tuple
var x;
x = ['hello', 30];
// x = [30,'hello']
console.log(x[0]);
console.log(x[1]);
x[3] = 'world';
console.log(x[3]);
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color);
console.log(Color.Blue);
var c = Color.Red;
console.log(Color[2]);
// Any
var notSure = true;
var notSure2 = 123;
var notSure3 = "Jim";
var list3 = [1, true, "free"];
// list[0]="ABC"
function warnUser() {
    console.log("This is my warning message");
}
var unusable = null;
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
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
strLength2: number = (someValue);
as;
string;
length;
// console.log(strLength2) 
