function pluck(o, names) {
    return names.map(function (n) { return o[n]; });
}
var person = {
    name: "Jim",
    age: 20,
    gender: 'male'
};
var strings = pluck(person, ['name']);
console.log(strings);
var personProps;
var personProps2;
function getProperty(o, name) {
    return o[name];
}
var pName = getProperty(person, 'name');
var pAge = getProperty(person, 'age');
var pGender = getProperty(person, 'gender');
var keys;
console.log(typeof keys);
