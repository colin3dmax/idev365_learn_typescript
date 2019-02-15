class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }
    sayHello(){
        console.log("Hi,Coder")
    }
    greet(){
        return "Hello,"+this.greeting;
    }
}

let greeter = new Greeter("world")
greeter.sayHello()
// console.log(greeter.greet())