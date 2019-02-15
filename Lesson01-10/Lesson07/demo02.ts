class Grid{
    static origin = {x:0,y:0};
    calculateDistanceFromOrigin(point:{x:number,y:number;}){
        let xDist = (point.x - Grid.origin.x)
        let yDist = (point.y - Grid.origin.y)
        return Math.sqrt(xDist*xDist + yDist*yDist) / this.scale;
    }
    constructor(public scale:number,public name:string){
        
    }
    printScale(){
        console.log("this.scale",this.scale)
    }
}


let grid1 = new Grid(1.0,"Grid01")
let grid2 = new Grid(5.0,"Grid02")

grid1.printScale()
grid2.printScale()

console.log(Grid.origin)

console.log(grid1.name)


console.log(grid1.calculateDistanceFromOrigin({x:10,y:10}))
console.log(grid2.calculateDistanceFromOrigin({x:10,y:10}))