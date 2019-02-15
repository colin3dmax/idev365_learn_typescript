import { Observable } from './observable'

declare module "./observable"{
    interface Observable<T>{
        map<U>(f: (x: T) => U): Observable<U>;
        
    }
}

Observable.prototype.map = function<T,U>(f: (x: T) => U): Observable<U>{
    console.log("in Observable.prototype.map ")
    return;
}