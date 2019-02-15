class Boy {
    public name:string;
    public age:number;
}

type Proxy<T> = {
    get():T;
    set(value:T):void;
}

type ProxyBoy = Proxy<Boy>;
let proxyBoy:ProxyBoy;


type Proxify<T> = {
    [P in keyof T]:Proxy<T[P]>;
}

type ProxifyBoy = Proxify<Boy>;
let proxifyBoy:ProxifyBoy;
// proxifyBoy.age.get()
// proxifyBoy.age.set(22)
// proxifyBoy.name.set("abc")
// proxifyBoy.name.get()


