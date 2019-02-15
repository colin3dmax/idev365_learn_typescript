// function broken(name:string | null):string{
//     function postfix(epithet:string){
//         return name.charAt(0) + '. the '+epithet;
//     }

//     name = name ;
//     return postfix("great")
// }

// console.log(broken("Tom"))
// console.log(broken(null))


function fixed(name:string|null):string{
    function postfix(epithet:string){
        return name!.charAt(0) + '. the '+epithet;
    }

    name = name || "Bob";
    return postfix("great")
}

console.log(fixed("Tom"))
console.log(fixed(null))
