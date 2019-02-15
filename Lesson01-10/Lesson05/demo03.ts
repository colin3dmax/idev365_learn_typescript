// interface ClockConstructor {
//     new(hour:number,minute:number):ClockInterface;
// }

// interface ClockInterface{
//     tick()
// }

// function createClock(ctor:ClockConstructor,hour:number,minute:number):ClockInterface{
//     return new ctor(hour,minute)
// }

// class DigitalClock implements ClockInterface {
//     currentTime: Date;
//     constructor(h:number,m:number){

//     }
//     tick(){
//         console.log("DigitalClock tick()")
//     }
// }

// let currentColock =createClock(DigitalClock,5,20)
// currentColock.tick()

// interface ClockConstructor {
//     new(hour:number,minute:number):Clock;
// }

// class Clock implements ClockConstructor {
//     constructor(hour:number,minute:number){

//     }
// }

// new Clock(5,10)