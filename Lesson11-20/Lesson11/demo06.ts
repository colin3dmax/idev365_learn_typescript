class BeeKeeper{
    hasMask:boolean;
    constructor(hasMask:boolean){
        this.hasMask = hasMask
    }
}

class ZooKeeper{
    nametag:string;
    constructor(nametag:string){
        this.nametag = nametag
    }
}

class Animal{
    numLegs:number;
    constructor(numLegs:number){
        this.numLegs = numLegs;
    }
}

class Bee extends Animal {
    keeper: BeeKeeper;
    constructor(){
        super(4);
        this.keeper = new BeeKeeper(true)
    }
}

class Lion extends Animal {
    keeper:ZooKeeper;

    constructor(){
        super(4);
        this.keeper = new ZooKeeper("ABC")
    }
}

function createInstance<A extends Animal>(c:new()=>A){
    return new c();
}


console.log(createInstance(Lion).keeper.nametag)
console.log(createInstance(Bee).keeper.hasMask)