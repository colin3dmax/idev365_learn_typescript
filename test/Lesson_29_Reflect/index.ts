import "reflect-metadata"

function logType(target:any,key:string){
   let t = Reflect.getMetadata("design:type",target,key);
   console.log(`${key} type: ${t.name}`)
}



function logParamTypes(target:any,key:string){
   let types = Reflect.getMetadata("design:paramtypes",target,key);
   types.map(t=>console.log(`${key} type: ${t.name}`))
}

declare interface IFoo {}

class Example {
      //  @logType
      //  private attr:number;

      @logParamTypes
      doSomething(
         parma1:string,
         param2:number,
         param3:{test:string},
         param4:IFoo,
         param6:Function,
         param7:(a:number)=>void,
      ):number{
         return 12;
      }

}

