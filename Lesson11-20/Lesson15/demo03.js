var MyBird = /** @class */ (function () {
    function MyBird() {
    }
    MyBird.prototype.fly = function () {
        console.log("Bird can fly.");
    };
    MyBird.prototype.layEggs = function () {
        console.log("Bird can lay eggs.");
    };
    return MyBird;
}());
var MyFish = /** @class */ (function () {
    function MyFish() {
    }
    MyFish.prototype.swim = function () {
        console.log("Fish can swim");
    };
    MyFish.prototype.layEggs = function () {
        console.log("Fish can lay eggs");
    };
    return MyFish;
}());
function getSmallPet() {
    if (Math.random() > 0.5) {
        return new MyFish();
    }
    else {
        return new MyBird();
    }
}
var pet = getSmallPet();
if (pet.swim) {
    pet.swim();
}
else {
    pet.fly();
}
function isFish(pet) {
    console.log(pet);
    return pet.swim !== undefined;
}
console.log(isFish(new MyBird()));
console.log(isFish(new MyFish()));
