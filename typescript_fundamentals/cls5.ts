interface iStudent{
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class DemoStudent implements iStudent {

    firstName: string;
    lastName: string;

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

var ds1 = new DemoStudent();
ds1.firstName = "Venugopal";
ds1.lastName = "Arumuru";

console.log(ds1.getFullName());