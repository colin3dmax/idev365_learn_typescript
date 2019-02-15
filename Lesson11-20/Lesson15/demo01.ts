function extend<T,U>(first: T,second: U): T & U {
    let result = <T & U>{};
    for(let id in first){
        (<any>result)[id] = (<any>first)[id]
    }
    for(let id in second){
        if(!result.hasOwnProperty(id)){
            (<any>result)[id] = (<any>second)[id]
        }
    }
    return result
}

class Person {
    constructor(public name:string){}
}

// class Person {
//     public name:string;
//     constructor(name:string){
//         this.name = name;
//     }
// }


interface Loggable{
    log():void;
}

class ConsoleLogger implements Loggable {
    log(){
        console.log("This is a Console Logger")
    }
}

var jim = extend(new Person("Jim"),new ConsoleLogger());
var n = jim.name;
jim.log()
