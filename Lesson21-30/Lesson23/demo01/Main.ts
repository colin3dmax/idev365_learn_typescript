// import { ZipCodeValidator } from "./ZipCodeValidator"
// import { ParseIntBasedZipCodeValidator } from './AllValidtors'
import ZipCodeValidator from  './ZipCodeValidator'

let valiator = new ZipCodeValidator()
console.log( valiator.isAcceptable("123"))
