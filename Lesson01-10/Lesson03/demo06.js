var i = 0;
for (i; i < 10; i++) {
    // (function(i){
    //     console.log(i)
    //     setTimeout(function(){
    //         console.log("timer->",i)
    //     },100*i);
    // })(i)
    (function (num) {
        setTimeout(function () {
            console.log("timer->", num);
        }, 100 * num);
    })(i);
}
