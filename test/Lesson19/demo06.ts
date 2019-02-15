class C2Proxy<T>{
    private value:T
    constructor(value:T){
        this.value = value
    }

    get():T{
        return this.value;
    }

    set(value:T){
        this.value = value;
    }
}

type Proxified<T> = {
    [P in keyof T]:C2Proxy<T[P]>;
}

function proxify<T>(o:T):Proxified<T>{
    let result = {} as Proxified<T>
    for(const k in o){
        result[k] = new C2Proxy(o[k])
    }
    return result;
}

function unproxify<T>(t:Proxified<T>):T{
    let result = {} as T;
    for(const k in t){
        result[k] = t[k].get()
    }
    return result;
}

interface SampleObj {
    a:string
    b:number
}

let props = {
    a:"XXX",
    b:12
}


let proxyProps:Proxified<SampleObj> = proxify(props)
proxyProps.a.set("Hello")

let props2 = unproxify(proxyProps)

console.log(props2)
