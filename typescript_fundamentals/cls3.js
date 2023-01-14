var Employee = /** @class */ (function () {
    function Employee(ename, sal) {
        this.ename = "";
        this.sal = 0.0;
        console.log("It is a constructor");
        this.ename = ename;
        this.sal = sal;
    }
    Employee.prototype.printEmpInfo = function () {
        console.log("Employee Name : " + this.ename);
        console.log("Employee Salary : " + this.sal);
        var cm = this.sal * 0.10;
        return cm;
    };
    return Employee;
}());
var e1 = new Employee("Pavan", 12000.00);
var comm = e1.printEmpInfo();
console.log("10% Commission " + comm);
