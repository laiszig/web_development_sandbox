var DemoStudent = /** @class */ (function () {
    function DemoStudent() {
    }
    DemoStudent.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return DemoStudent;
}());
var ds1 = new DemoStudent();
ds1.firstName = "Venugopal";
ds1.lastName = "Arumuru";
console.log(ds1.getFullName());
