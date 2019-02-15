class Person {
    readonly name:string;
    protected constructor(name:string){
        this.name = name;
    }
}

class Employee extends Person{
    private department:string;
    constructor(name:string,department:string){
        super(name)
        this.department = department;
    }
    public getElevatorPitch(){
        return `Hello,my name is ${this.name} and I work in ${this.department}.`
    }
}

let howard = new Employee('Howard','Sales');
console.log(howard.getElevatorPitch())

// howard.name="Jimmy"