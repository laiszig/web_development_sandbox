class Person {
    protected pname : string = "";
    protected age : number = 0;

    constructor (pn:string, age:number) {
        this.pname = pn;
        this.age = age;
    }


    getDetails(): string {
        return this.pname + " age is " + this.age;
    }
}

class StdInfo extends Person {
    private sid: number=0;
    private marks: number=0;

    constructor (pn:string, ag:number, sid:number, mk:number) {
        super(pn, ag);
        this.sid = sid;
        this.marks = mk;
    }

    getMarks():string {
        return this.sid + " Secured Marks " + this.marks;
    }
}

var Std1 = new StdInfo("Pavan", 24, 1001, 78);
console.log("Student Details : " + Std1.getDetails());
console.log("Student Marks : " + Std1.getMarks());