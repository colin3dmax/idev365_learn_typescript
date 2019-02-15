class Animal {}
class Sheep{}
class Dog{}
class Cat{}

interface Cloner{
    clone(animal:Animal):Animal;
}

interface Cloner{
    clone(anima:Sheep):Sheep;
}

interface Cloner{
    clone(animal:Cat):Cat;
    clone(animal:Dog):Dog;
}

let cloner:Cloner;

let anim1 = cloner.clone(new Dog())
let anim2 = cloner.clone(new Cat())
let anim3 = cloner.clone(new Animal())
let anim4 = cloner.clone(new Sheep())