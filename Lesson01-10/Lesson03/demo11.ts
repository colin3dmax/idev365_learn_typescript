for(var i=0;i<10;i++){

    (function(num){
        setTimeout(function(){
            console.log(num)
        },100*num);
    })(i);
    
}


for(let i=0;i<10;i++){
    setTimeout(function(){
        console.log(i)
    },100*i);
}