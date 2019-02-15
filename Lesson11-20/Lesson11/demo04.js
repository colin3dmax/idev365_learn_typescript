function loggingId(arg) {
    console.log(arg.length);
    return arg;
}
console.log(loggingId("ABC"));
// console.log(loggingId<number>(123))
console.log(loggingId({
    value: "abcc",
    length: 5
}));
