enum EventType { Mouse,Keyboard }

interface Event { timestamp:number;}
interface MouseEvent2 extends Event { 
    x:number;
    y:number;
}
interface KeyEvent extends Event {
     keyCode:number
}

function listenEvent(eventType:EventType,handler:(n:Event)=>void){

}

listenEvent(EventType.Mouse,(e:MouseEvent2)=>console.log(e.x+","+e.y))
listenEvent(EventType.Mouse,(e: Event) => console.log((<MouseEvent2>e).x + ',' + (<MouseEvent2>e).y));
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent2) => console.log(e.x + ',' + e.y)));


enum Status {Ready ,Waiting}

enum Color { Red,Blue,Green}

let status2 = Status.Ready
// status2 = Color.Green



interface Empty<T> {
    data:T
}
let x2: Empty<number>;
let y2: Empty<string>;

// x2 = y2;  // OK, because y matches structure of x
// y2 = x2;


let identity = function<T>(x:T):T{
    return x;
}

let reverse = function<U>(y:U):U{
    return y;
}

identity = reverse
