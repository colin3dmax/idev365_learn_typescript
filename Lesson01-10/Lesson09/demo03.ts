interface UIElement {
    addClickListener(onclick:(this:void,e:Event)=>void):void;
}

class UIButton implements UIElement{
    addClickListener(onclick:(this:void,e:Event)=>void):void{
        let event:Event =new Event("Click",{
            bubbles: true,
            cancelable: true,
            composed: true,
        })
        onclick(event)
    }
}

class Handler {
    info:string;
    onClickBad(this:Handler,e:Event){
        this.info = "Bad Clicked"
    }
    onClickGood(this:void,e:Event){
        console.log("Good Clicked")
    }
}

let h = new Handler()
let uiElement:UIElement = new UIButton()
uiElement.addClickListener(h.onClickGood)