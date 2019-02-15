"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function logType(target, key) {
    var t = Reflect.getMetadata("design:type", target, key);
    console.log(key + " type: " + t.name);
}
function logParamTypes(target, key) {
    var types = Reflect.getMetadata("abc", target, key);
    types.map(function (t) { return console.log(key + " type: " + t.name); });
}
var Example = /** @class */ (function () {
    function Example() {
    }
    //  @logType
    //  private attr:number;
    Example.prototype.doSomething = function (parma1, param2, param3, param4, param6, param7) {
        return 12;
    };
    __decorate([
        logParamTypes,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number, Object, Object, Function, Function]),
        __metadata("design:returntype", Number)
    ], Example.prototype, "doSomething", null);
    return Example;
}());
//# sourceMappingURL=index.js.map