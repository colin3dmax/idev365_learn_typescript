function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
console.log(pluck({
    name: "Jim",
    age: 22,
    hoppy: 'reading'
}, ["name", "age"]));
