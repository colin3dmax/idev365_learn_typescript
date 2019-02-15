namespace Shapes {
    export namespace Polygons {
        export class Triangle { }
        export class Square { }
    }
}

let test = new Shapes.Polygons.Triangle()
import Polygons = Shapes.Polygons;

let test2 = new Polygons.Square()

import Triangle = Shapes.Polygons.Triangle;

let test3 = new Triangle()