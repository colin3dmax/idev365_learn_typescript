interface SeachFunc {
    (source:string,subString:string):boolean;
}

let mySearch:SeachFunc;
mySearch = function(source:string,subString:string){
    let result = source.search(subString);
    return result>-1;
}

mySearch = function(src:string,sub:string){
    let result = src.search(sub);
    return result>-1;
}



