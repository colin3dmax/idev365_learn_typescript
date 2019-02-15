function enumerable(isEnumerable:boolean){
    return function(target,propName,descriptor:PropertyDescriptor){
        console.log("descriptor",descriptor)
        descriptor.enumerable = isEnumerable;
    }
}

class Greeter3 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}


for(let key in Greeter3.prototype){
    console.log("key--->",key)
}

