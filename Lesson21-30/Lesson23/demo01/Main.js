"use strict";
exports.__esModule = true;
// import { ZipCodeValidator } from "./ZipCodeValidator";
var AllValidtors_1 = require("./AllValidtors");
var valiator = new AllValidtors_1.ParseIntBasedZipCodeValidator();
console.log(valiator.isAcceptable("123"));
