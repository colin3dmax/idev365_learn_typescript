function f(x){
    var x;
    var x;
    if(true){
        var x;
    }
}

function f1(x){
    // let x;
}


// let x = 10;
// let x;

function g(){
    let x = 100;
    console.log("func g block->x",x)
    if(true){
        let x = 5;
        console.log("if block x",x)
    }
    console.log("func g block->x",x)
}

g()