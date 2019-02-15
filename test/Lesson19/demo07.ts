class Proxy2<T>{
    private value:T;
    constructor(value:T){
        this.value = value
    }
    get():T{
        return this.value
    }
    set(value:T):void{
        this.value = value;
    }
}

type Proxified<T> = {
    [P in keyof T]:Proxy2<T[P]>
}

type StuProxified=Proxified<{name:string}>

function proxify<T>(o:T):Proxified<T>{
    let result = {}  as Proxified<T>
    for(const k in o){
        result[k] = new Proxy2(o[k])
    }
    return result;
}

type Info = {
    name:string;
    age:number;
}

let myInfo = proxify<Info>({
    name:"ABC",
    age:12,
})

myInfo.name.set("ABC");
console.log(myInfo)




