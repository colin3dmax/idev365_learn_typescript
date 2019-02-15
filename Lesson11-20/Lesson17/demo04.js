function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "reactagle": return s.width * s.height;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
    }
}
// console.log( area() )
