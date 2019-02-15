let input = [1,2]
let [first,second] = input;
[first,second] = [second,first]

console.log("first:",first)
console.log("second:",second)


function swap([first,second]:[number,number]){
    return [second,first]
}

console.log(swap([1,2]))

