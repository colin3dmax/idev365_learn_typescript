function pluck2(o, names) {
    return names.map(function (n) { return o[n]; });
}
console.log(pluck2({ name: "Jim", age: 20, gender: 'male' }, ["name", "age"]));
function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
console.log(pluck({ name: "Jim", age: 20, gender: 'male' }, ["name", "age"]));
var person = {
    name: 'Jarid',
    age: 35
};
var personProps;
var personProps2;
function getProperty(o, name) {
    return o[name];
}
console.log(getProperty(person, "name"));
