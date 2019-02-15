function sumAll(scores) {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        var row = scores[i];
        console.log("row-->i->" + i, row);
        for (var i = 0; i < row.length; i++) {
            var column = row[i];
            sum += column;
            console.log("column-->i->" + i, column);
        }
    }
    return sum;
}
var scores = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log("sumAll->", sumAll(scores));
