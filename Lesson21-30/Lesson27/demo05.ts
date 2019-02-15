function buildLable(name:string):string{
    return buildLable.prefix+name+buildLable.suffix;
}

namespace buildLable{
    export let suffix = "";
    export let prefix = "Hello,"
}


console.log( buildLable("Jimmy") )