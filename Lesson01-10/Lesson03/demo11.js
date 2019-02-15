for (var i = 0; i < 10; i++) {
    (function (num) {
        setTimeout(function () {
            console.log(num);
        }, 100 * num);
    })(i);
}
for (var i_1 = 0; i_1 < 10; i_1++) {
    setTimeout(function () {
        console.log(i_1);
    }, 100 * i_1);
}
