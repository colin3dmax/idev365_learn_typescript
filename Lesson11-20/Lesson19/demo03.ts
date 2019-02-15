type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">; 
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;


type T04 = NonNullable<string | number | undefined>;  // string | number
type T05 = NonNullable<(() => string) | string[] | null | undefined>; 

function f1(s: string) {
    return { a: 1, b: s };
}

class C {
    x = 0;
    y = 0;
}

let myFun:(a:number,b:number)=>string[];

type T10 = ReturnType<() => string>; 
type T11 = ReturnType<(a:number,b:number)=>number>; 


type T12 = ReturnType<typeof myFun>; 

let a:string;

class StudentInfo {

}

type T20 = InstanceType<typeof C>;
type T21 = InstanceType<any>;
type T22 = InstanceType<typeof StudentInfo>;

let stuInfo:T22 = new StudentInfo()