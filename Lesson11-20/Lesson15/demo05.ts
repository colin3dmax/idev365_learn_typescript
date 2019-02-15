interface Padder {
    getPaddingString():string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces:number){

    }
    getPaddingString():string{
        return Array(this.numSpaces+1).join(" ")
    }
    print(){
        console.log("I'm SpaceRepeatingPadder")
    }
}

console.log("1234567890")
console.log(new SpaceRepeatingPadder(5).getPaddingString()+"|")

class StringPadder implements Padder {
    constructor(private value:string){}
    getPaddingString(){
        return this.value;
    }
    say(){
        console.log("I'm StringPadder")
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}

let padder:Padder = getRandomPadder();

if(padder instanceof SpaceRepeatingPadder){
    padder.print()
}

if(padder instanceof StringPadder){
    padder.say()
}
