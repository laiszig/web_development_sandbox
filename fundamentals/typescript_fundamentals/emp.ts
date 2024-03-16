export class Employee
{
    empno : number=0;
    ename: string = "";
    job: string = "";
    sal: number = 0;

    constructor(eno:number, ename:string, job:string, sal:number)
    {
        this.empno = eno;
        this.ename = ename;
        this.job = job;
        this.sal = sal;
    }
}