interface PersonPartial {
    name?:string;
    age?:string;
}

interface PersonReadonly {
    readonly name:string;
    readonly age:number;
}

type MyReadonly<T> = {
    readonly [P in keyof T]:T[P]
}

class Student {
    public name:string;
    public age:number;
}


let stu = new Student()
stu.name = "Jim"
stu.age = 20

type ReadonlyStudnent = MyReadonly<Student>;
let readonlyStudent:MyReadonly<Student> = stu;
console.log(readonlyStudent.name)
console.log(readonlyStudent.age)
// readonlyStudent.name = "Anny"

type MyPartial<T> = {
    [P in keyof T]?:T[P]
}

let partialStu:MyPartial<Student> = stu;

type PartialStudent = MyPartial<Student>
let partialStu2:PartialStudent = stu;

partialStu2.name

type Keys = "option1" | "option2"
type Flags = { readonly [K in Keys]:string|boolean|null }


