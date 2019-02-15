interface Legnthwise {
    length:number;
}

function loggingId<T extends Legnthwise>(arg:T):T{
    console.log(arg.length)
    return arg;
}


console.log(loggingId<string>("ABC"))


// console.log(loggingId<number>(123))

console.log(loggingId({
    value:"abcc",
    length:5,
}))
