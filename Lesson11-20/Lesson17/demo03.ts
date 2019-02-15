type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
    animate(dx:number,dy:number,easing:Easing){
        if( easing === "ease-in" ){
            console.log(`dx:${dx},dy:${dy},easing:${easing}`)
        }else if(easing === "ease-out"){
            console.log(`dx:${dx},dy:${dy},easing:${easing}`)
        }else if(easing === "ease-in-out"){
            console.log(`dx:${dx},dy:${dy},easing:${easing}`)
        }else{
            console.warn("unknow easing:",easing)
        }
    }
}

let button = new UIElement()

button.animate(0,0,"ease-in")
button.animate(0,0,"ease-out")
button.animate(0,0,"ease-in-out")
// button.animate(0,0,"ease-swing")


type TagName = "img" | "p" | "div" | "span"

interface HTMLElement2{
    toString():string;
}

class HTMLImageElement2 implements HTMLElement2 {
    toString():string{
        return "<img src=''>"
    }
}
class HTMLPElement2 implements HTMLElement2 {
    toString():string{
        return "<p></p>"
    }
}
class HTMLDivElement2 implements HTMLElement2 {
    toString():string{
        return "<div></div>"
    }
}
class HTMLSpanElement2 implements HTMLElement2 {
    toString():string{
        return "<span></span>"
    }
}

function createElement(tagName:TagName):HTMLElement2{
    let element:HTMLElement2;
    switch(tagName){
        case "img":
        element = new HTMLImageElement2()
        break;
        case "p":
        element = new HTMLPElement2()
        break;
        case "div":
        element = new HTMLDivElement2()
        break;
        case "span":
        element = new HTMLSpanElement2()
        break;
    }
    return element;
}

console.log(createElement("p").toString())
console.log(createElement("img").toString())
console.log(createElement("div").toString())
console.log(createElement("span").toString())

function rollDie():1|2|3|4|5|6{
    let nums = [1,2,3,4,5,6]
    let random = Math.random()
    if(random<0.2){
        return 1;
    }else if(random<0.4){
        return 2;
    }else if(random<0.4){
        return 3;
    }else if(random<0.6){
        return 4;
    }else if(random<0.8){
        return 5;
    }else if(random<1.0){
        return 6;
    }
}

for(let i=0;i<10;i++){
    console.log(i+"=>"+rollDie())
}

function foo(x:number){
    if(true){
        console.log(x)
    }
}



foo(1.2)






