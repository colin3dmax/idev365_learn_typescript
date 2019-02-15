function padLeft(value:string,padding: string | number){
    if(typeof padding=="number"){
        return Array(padding+1).join(" ") + value;
    }
    if(typeof padding ==="string"){
        return padding + value;
    }
    throw new Error(`Expected string or number,got ${padding}.`)
}
console.log("1234567890")
console.log(padLeft("Hello World",5))

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


getSmallPet().layEggs()
// getSmallPet().fly()
// getSmallPet().swim()


