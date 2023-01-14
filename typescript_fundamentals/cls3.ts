class Employee{
    private ename:string="";
    private sal: number=0.0;

    constructor(ename:string, sal:number) {
        console.log("It is a constructor");
        this.ename = ename;
        this.sal = sal;
    }
    printEmpInfo(): number {
        console.log("Employee Name : " + this.ename);
        console.log("Employee Salary : " + this.sal);
        var cm = this.sal * 0.10;
        return cm;
    }
}

var e1 = new Employee("Pavan", 12000.00);
var comm : number = e1.printEmpInfo();
console.log("10% Commission " + comm);