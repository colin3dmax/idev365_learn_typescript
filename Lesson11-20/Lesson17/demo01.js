function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
console.log(getName("山地人"));
console.log(getName(function () {
    return "Hello World";
}));
var Girl = /** @class */ (function () {
    function Girl(name) {
        this.name = name;
    }
    return Girl;
}());
var person = new Girl("Anny");
var s = person.name;
console.log(s);
console.log(person.next);
// var s1 = person.next.next.next.next.name;
var ct = { value: 123 };
console.log(ct.value);
var ct2 = { value: "ABC" };
console.log(ct2.value);
