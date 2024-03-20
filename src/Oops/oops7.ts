// PRIVATE AND PROTECTED MEMBERS

// If we make a method or members private or protected we can acces s it anywhere within the class
// Protected members are inherited but private members are not.
class Person{
    constructor(public firstName: string, public lastName: string){}

    private walk(){
        console.log("Walking");
    }

    protected run(){
        console.log("Running");
    }
}

class Student extends Person{
    constructor(public studentId: number,firstName: string,lastName:string){
        super(firstName,lastName)
    }

    takeTest(){
        console.log("Taking Test");
        this.walk;  //walk is private , so it is not inherited it will will available inside that class only
        this.run;  // Protected can be accessed and it craetes coupling
    }
}