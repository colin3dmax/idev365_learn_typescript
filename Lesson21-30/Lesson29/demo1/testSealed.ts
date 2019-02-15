function sealed(constructor:Function){
    console.log("sealed-->get->constructor",constructor)
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}


// @sealed
class Greeter{
    greeting:string;
    constructor(message:string){
        this.greeting = message;
    }
    greet(){
       console.log("greet")
    }

    static hello(){
        console.log("Hello")
    }
}

new Greeter("Jimmy").greet()
// delete Greeter.prototype.greet
// Greeter.prototype.say=function(){
//     console.log("say->>")
// }
// new Greeter("Jimmy").say()
