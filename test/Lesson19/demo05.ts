type MyPick<T,K extends keyof T> = {
    [A in K]:T[A];
}

type MyRecord<K extends string,T> = {
    [A in K]:T;
}

class Girl {
    name:string;
    age:number;
}

type MyPickGirl = MyPick<Girl,"age">;

let girl:MyPickGirl;
// girl.name

type GirlRecord = MyRecord<"name"|"age",Girl>;
let girlRecord:GirlRecord;
// girlRecord.age

type ThreeStringProps = MyRecord<"prop1"|"prop2"|"prop3",string>


// type MyProxy<T> = {
//     get():T;
//     set(value:T):void;
// }

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

type MyProxify<T> = {
    [P in keyof T]:MyProxy<T[P]>;
}

class MyBoy {
    public name:string;
    public age:number;
}

// type MyProxyBoy = MyProxy<MyBoy>;
type MyProxifyBoy = MyProxify<MyBoy>;


function myProxify<T>(o:T):MyProxify<T>{
    let result = {} as MyProxify<T>
    for(const k in o){
        result[k] = new MyProxy(o[k])
    }
    return result;
}


function unproxify<T>(t:MyProxify<T>):T{
    let result = {} as T;
    console.log("unproxify--->in",t)
    for (const k in t) {
        console.log("k->",k,"---t[k]",t[k],"---t[k].get()",t[k].get())
        result[k] = t[k].get();
    }
    return result;
}

let boy = new MyBoy()

type MyStu = {
    name:string;
    age:number;
    gender:string;
}

let myProxifyBoy:MyProxify<MyStu> = myProxify<MyStu>({
    name:"123",
    age:30,
    gender:"male"
});

myProxifyBoy.gender.set("female")
console.log(myProxifyBoy)



// myProxifyBoy.age.get()

// let orginalProps = unproxify(myProxifyBoy)
// // orginalProps.age
// // orginalProps.name



