import { Employee } from "./emp";

class EmpList
{
    emps : Employee[] = [
    new Employee(101, "Ravi", "Developer", 12000.00), 
    new Employee(102, "Kavi", "Developer", 10000.00),
    new Employee(103, "Bavi", "Developer", 9000.00),
    new Employee(104, "Lavi", "Developer", 9500.00),
    new Employee(105, "Navi", "Developer", 15000.00)]

    getEmpDetails()
    {
        for(var i in this.emps) // everytime index number will be passed
        {
            console.log(this.emps[i].empno + "  " + this.emps[i].ename + "  " + this.emps[i].job + "  " + this.emps[i].sal)
        }
    }
}

var el = new EmpList();
el.getEmpDetails();


/*
./filename  :-  currently working folder(exporting and importing files are in same folder)
../ :- previour folder(parent folder)
*/