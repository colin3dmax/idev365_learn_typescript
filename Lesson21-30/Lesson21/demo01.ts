let someArray = [1,"string",false]

for(let entry of someArray){
    console.log(entry)
}

for(let index in someArray){
    console.log(someArray[index])
}

let list = [4,5,6]
for(let i in list){
    console.log(`${parseInt(i)+1}:${list[i]}`)
}

let pets = new Set(["Cat","Dog","Hamster"]);
pets["species"] = "mammals";

for(let pet in pets){
    console.log(pet);
}
console.log("=========================")
for(let pet of pets){
    console.log(pet);
}

