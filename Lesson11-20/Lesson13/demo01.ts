let x:number = null;
let y = [0,1,null]

class Animal{}
class Rhino extends Animal{}
class Elephant extends Animal{}
class Snake extends Animal{}

let zoo:Animal[] = [new Rhino(),new Elephant(),new Snake()]

// window.onmousedown = function(mouseEvent:any) {
//     console.log(mouseEvent.button);  //<- Error
// };


function createZoo():Animal[]{
    return [new Rhino(),new Elephant(),new Snake()]
}