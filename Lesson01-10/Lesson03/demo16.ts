class C {
    p = 12;
    m(){
        return "ABC"
    }
}

let c = new C();
let clone = { ...c }
console.log(clone.p)
console.log(clone.m())