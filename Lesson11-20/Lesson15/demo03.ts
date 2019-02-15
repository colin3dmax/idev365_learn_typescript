
interface Bird {
    fly();
    layEggs();
}

interface Fish{
    swim();
    layEggs();
}

class MyBird implements Bird{
    fly(){
        console.log("Bird can fly.")
    }
    layEggs(){
        console.log("Bird can lay eggs.")
    }
}

class MyFish implements Fish{
    swim(){
        console.log("Fish can swim")
    }
    layEggs(){
        console.log("Fish can lay eggs")
    }
}

function getSmallPet():Fish|Bird{
    if(Math.random()>0.5){
        return new MyFish()
    }else{
        return new MyBird()
    }
}

let pet = getSmallPet();

if((<Fish>pet).swim){
    (<Fish>pet).swim()
}else{
    (<Bird>pet).fly()
}

function isFish(pet:Fish | Bird):pet is Fish{

    console.log(  (<Fish>pet)  )
    return (<Fish>pet).swim !== undefined
}


console.log(isFish(new MyBird()))

console.log(isFish(new MyFish()))
let pet2 = new MyBird()
if(isFish(pet2)){
    pet2.swim()
}else{
    pet2.fly()
}







