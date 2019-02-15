// let first = [1,2]
// let second = [3,4]
// let botherPlus = [0,...first,...second,5]
// console.log(botherPlus)

let info = {
    name:"Jimmy",
    age:18,
}

let extInfo = {
    gender:'male',
    height:'180',
}

// let student = { info:info, ...extInfo }


let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { food: "rich", ...defaults };

console.log(search)