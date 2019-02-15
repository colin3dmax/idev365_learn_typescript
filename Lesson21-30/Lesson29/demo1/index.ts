function f(){
    console.log("f() begin")
    return function(target,propertyKey:string,descriptor:PropertyDescriptor){
        console.log("f() called")
    }
}

function g(){
    console.log("g() begin")
    return function(target,propertyKey:string,descriptor:PropertyDescriptor){
        console.log("g() called")
    }
}

class C{

    @f()
    @g()
    say(){
        console.log("say")
    }

}


