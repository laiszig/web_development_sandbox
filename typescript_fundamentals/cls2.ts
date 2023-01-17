class Student {
    private rno:number=0;
    private sname:string= "";
    private course:string="";
    private fees:number=0.0;

    getValues(rno:number,sname:string, course:string, fees:number){
        this.course = course;
        this.rno = rno;
        this.fees = fees;
        this.sname = sname;
    }

printStudent() {
    console.log(this.course);
    console.log(this.sname);
    console.log(this.rno);
    console.log(this.fees);
    }
}

var std1 = new Student();
std1.getValues;