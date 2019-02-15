var p1 = { x: 10, y: 20 };
// p1.x = 5;
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12
// ro.push(5)
// ro.length = 100
// a = ro;
a = ro;
a.push(6);
console.log(a);
console.log(ro);
