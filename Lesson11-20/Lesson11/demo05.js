function create(c) {
    return new c();
}
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.say = function () {
        console.log("Student say");
    };
    return Student;
}());
var stu = create(Student);
stu.say();
