var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            console.log("easing--->ease-in anim");
        }
        else if (easing === "ease-out") {
            console.log("easing--->ease-out anim");
        }
        else if (easing === "ease-in-out") {
            console.log("easing--->ease-in-out anim");
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
function createElement(tagName) {
    return document.createElement(tagName);
}
// function createElement(tagName:"input"):HTMLInputElement{
//     return new HTMLInputElement()
// }
console.log(createElement("img").outerHTML);
