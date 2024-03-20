// INHERITANCE 

class Person2{
    constructor(public firstName:string, public lastName:string){
    
    }

    get fullName(){
        return this.firstName + " " + this.lastName;
    }
    
    walk(){
        console.log("Walking");
    }
}

class Student2 extends Person2{
    constructor(public studentId:number, firstName: string,  lastName: string){
        super(firstName, lastName)
    }

    takeTest(){
        console.log("taking a test");
    }
}

let student = new Student2(1,"Sreerag","PA");
console.log(student.fullName);


