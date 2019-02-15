import { StringValidator } from "./Validation";

export class ParseIntBasedZipCodeValidator implements StringValidator{
    isAcceptable(s:string):boolean{
        return s.length === 5 && parseInt(s).toString()===s;
    }
}