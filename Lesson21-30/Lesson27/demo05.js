function buildLable(name) {
    return buildLable.prefix + name + buildLable.suffix;
}
(function (buildLable) {
    buildLable.suffix = "";
    buildLable.prefix = "Hello,";
})(buildLable || (buildLable = {}));
console.log(buildLable("Jimmy"));
