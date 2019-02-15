var UIElement = /** @class */ (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (dx, dy, easing) {
        if (easing === "ease-in") {
            console.log("dx:" + dx + ",dy:" + dy + ",easing:" + easing);
        }
        else if (easing === "ease-out") {
            console.log("dx:" + dx + ",dy:" + dy + ",easing:" + easing);
        }
        else if (easing === "ease-in-out") {
            console.log("dx:" + dx + ",dy:" + dy + ",easing:" + easing);
        }
        else {
            console.warn("unknow easing:", easing);
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "ease-out");
button.animate(0, 0, "ease-in-out");
var HTMLImageElement2 = /** @class */ (function () {
    function HTMLImageElement2() {
    }
    HTMLImageElement2.prototype.toString = function () {
        return "<img src=''>";
    };
    return HTMLImageElement2;
}());
var HTMLPElement2 = /** @class */ (function () {
    function HTMLPElement2() {
    }
    HTMLPElement2.prototype.toString = function () {
        return "<p></p>";
    };
    return HTMLPElement2;
}());
var HTMLDivElement2 = /** @class */ (function () {
    function HTMLDivElement2() {
    }
    HTMLDivElement2.prototype.toString = function () {
        return "<div></div>";
    };
    return HTMLDivElement2;
}());
var HTMLSpanElement2 = /** @class */ (function () {
    function HTMLSpanElement2() {
    }
    HTMLSpanElement2.prototype.toString = function () {
        return "<span></span>";
    };
    return HTMLSpanElement2;
}());
function createElement(tagName) {
    var element;
    switch (tagName) {
        case "img":
            element = new HTMLImageElement2();
            break;
        case "p":
            element = new HTMLPElement2();
            break;
        case "div":
            element = new HTMLDivElement2();
            break;
        case "span":
            element = new HTMLSpanElement2();
            break;
    }
    return element;
}
console.log(createElement("p").toString());
console.log(createElement("img").toString());
console.log(createElement("div").toString());
console.log(createElement("span").toString());
function rollDie() {
    var nums = [1, 2, 3, 4, 5, 6];
    var random = Math.random();
    if (random < 0.2) {
        return 1;
    }
    else if (random < 0.4) {
        return 2;
    }
    else if (random < 0.4) {
        return 3;
    }
    else if (random < 0.6) {
        return 4;
    }
    else if (random < 0.8) {
        return 5;
    }
    else if (random < 1.0) {
        return 6;
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i + "=>" + rollDie());
}
function foo(x) {
    if (x !== 1 || x !== 2) {
        console.log(x);
    }
}
foo(1.2);
