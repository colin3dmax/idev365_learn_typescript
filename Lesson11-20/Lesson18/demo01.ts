type Easing = "ease-in" | "ease-out" | "ease-in-out"

class UIElement {
    animate(dx:number,dy:number,easing:Easing){
        if(easing === "ease-in"){
            console.log("easing--->ease-in anim")
        }else if(easing === "ease-out"){
            console.log("easing--->ease-out anim")
        }else if(easing === "ease-in-out"){
            console.log("easing--->ease-in-out anim")
        }
    }
}

let button = new UIElement()
button.animate(0,0,"ease-in")
// button.animate(10,20,"ease-swing")

type TagName = "img" | "input" 
function createElement(tagName:TagName):HTMLElement{
    return document.createElement(tagName)
}

// function createElement(tagName:"input"):HTMLInputElement{
//     return new HTMLInputElement()
// }


console.log( createElement("img").outerHTML )
