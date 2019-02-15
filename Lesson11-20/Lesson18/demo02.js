function rollDie() {
    var num = Math.random();
    if (num < 0.1) {
        return 1;
    }
    else if (num < 0.2) {
        return 2;
    }
    else if (num < 0.4) {
        return 3;
    }
    else if (num < 0.5) {
        return 4;
    }
    else if (num < 0.7) {
        return 5;
    }
    else {
        return 6;
    }
}
for (var i = 0; i < 10; i++) {
    console.log(rollDie());
}
