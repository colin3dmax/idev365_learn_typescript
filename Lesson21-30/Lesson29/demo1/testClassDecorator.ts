function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class Greeter2 extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter2 {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

console.log(new Greeter2("world"));


