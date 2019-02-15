abstract class Animal {
    abstract makeSound():void;
    move():void{
        console.log('roaming the earch...')
    }
}

class Bird extends Animal {
    makeSound(){
        console.log("Bird makeSound")
    }
}

new Bird().makeSound()