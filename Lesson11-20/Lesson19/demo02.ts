class MyProxy<T>{
    private value:T;
    constructor(value:T){
        this.value = value;
    }

    get():T{
        return this.value;
    }

    set(value:T):void{
        this.value = value;
    }

}

class Student {
    name:string;
    age:number;
}
let student = new Student();
student.name="Jim"
student.age = 12

type MyProxyStudent = MyProxy<Student>;

let myStudentProxy:MyProxyStudent = new  MyProxy<Student>(student);

type Proxify<T> = {
    [P in keyof T]:MyProxy<T[P]>
}


type StudentProxify=Proxify<Student>
let stuProxify:StudentProxify
// stuProxify.age.get
// stuProxify.age.set



function myProxify<T>(o:T):Proxify<T>{
    let result = {} as Proxify<T>;
    for(const k in o){
        result[k] = new  MyProxy(o[k])
    }
    return result;
}

let annyProxify = myProxify<Student>({
    name:"Anny",
    age:15,
})
console.log(annyProxify)
annyProxify.name.set("Kite")
annyProxify.age.set(20)
console.log(annyProxify)

function unproxify<T>(t:Proxify<T>):T{
    let result = {} as T;
    for(const k in t){
        result[k] = t[k].get()
    }
    return result;
}

let orgAnny = unproxify<Student>(annyProxify);
console.log(orgAnny)







