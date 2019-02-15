// let first = [1,2]
// let second = [3,4]
// let botherPlus = [0,...first,...second,5]
// console.log(botherPlus)
var info = {
    name: "Jimmy",
    age: 18
};
var extInfo = {
    gender: 'male',
    height: '180'
};
// let student = { info:info, ...extInfo }
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = { food: "rich", defaults: defaults };
console.log(search);
