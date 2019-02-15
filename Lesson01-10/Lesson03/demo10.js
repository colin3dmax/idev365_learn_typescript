function sumAll(scores) {
    var sum = 0;
    for (var i = 0; i < scores.length; i++) {
        var row = scores[i];
        console.log("row-->i->" + i, row);
        for (var i_1 = 0; i_1 < row.length; i_1++) {
            var column = row[i_1];
            sum += column;
            console.log("column-->i->" + i_1, column);
        }
    }
    return sum;
}
var scores = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log("sumAll->", sumAll(scores));
