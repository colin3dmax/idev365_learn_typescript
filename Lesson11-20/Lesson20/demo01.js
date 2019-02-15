const sym1 = Symbol();
let sym2 = Symbol("key");
let sym3 = Symbol("key");
console.log(sym2 === sym3);
let obj = {
    [sym1]: "value"
};
console.log(obj[sym1]);
const getClassNameSymble = Symbol();
const sayHi = "sayHi";
class C {
    [getClassNameSymble]() {
        return "C";
    }
    [sayHi]() {
        return "Hi";
    }
}
let c = new C();
let className = c[getClassNameSymble]();
console.log("className->", className);
console.log(c[sayHi]());
console.log(Symbol.replace);
