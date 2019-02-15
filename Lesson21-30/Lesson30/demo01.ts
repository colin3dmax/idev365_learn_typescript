import "reflect-metadata"

class Greeter {
    @format("Jimmy, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message
    }
    greet() {
        let formatString = getFormat(this, "greeting")
        return formatString.replace("%s", this.greeting)
    }
}

function format(formatString:string){
    return Reflect.metadata("my-format",formatString)
}


function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata("my-format", target, propertyKey)
}


function test(){
    let greeter = new Greeter("ABC")
    console.log( greeter.greet() )
}

test()