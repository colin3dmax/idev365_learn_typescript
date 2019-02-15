
function create<T>( c:{new():T;} ):T{
    return new c();
}

class Student{
    constructor(){

    }
    say(){
        console.log("Student say")
    }
}

let stu =create<Student>( Student )
stu.say()

