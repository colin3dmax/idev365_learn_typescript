class BasicCalculator{
    public constructor(protected value: number = 0){}
    public currentValue():number{
        return this.value;
    }
    public add(operand:number):this{
        this.value += operand;
        return this;
    }
    public multiply(operand:number):this{
        this.value *= operand;
        return this;
    }
}


let v = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue()

console.log(v)


class ScientificCaculator extends BasicCalculator{
    public constructor(value=0){
        super(value);
    }

    public sin(){
        this.value = Math.sin(this.value);
        return this;
    }
}

console.log( new ScientificCaculator(5).add(2).sin().currentValue() )



