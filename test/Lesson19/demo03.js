var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var stu = new Student();
stu.name = "Jim";
stu.age = 20;
var readonlyStudent = stu;
console.log(readonlyStudent.name);
console.log(readonlyStudent.age);
