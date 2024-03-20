// METHOD OVERRIDING 

class Person{
    constructor(public firstName:string, public lastName:string){
    
    }

    get fullName(){
        return this.firstName + " " + this.lastName;
    }
    
    walk(){
        console.log("Walking");
    }
}


class Student extends Person{
    constructor(public studentId:number, firstName: string,  lastName: string){
        super(firstName, lastName)
    }

    takeTest(){
        console.log("taking a test");
    }
}


class Teacher extends Person{
    override get fullName(){
        return 'Professor' + super.fullName
    }
}

let teacher = new Teacher("John","Smith")
console.log(teacher.fullName);


// POLYMORPHISM 
printNames([
    new Student(1,"Sreerag","PA"),
    new Teacher("Mosh","Hamedani")
])

function printNames(people: Person[]){
    for(let person of people){
        console.log(person.fullName);
        
    }
}


//Polymorphism is the ability of different classes to be treated as instances of a common superclass. 
//It allows objects of different classes to be treated uniformly based on their common interface (e.g., methods they implement), without knowing their specific types at compile time.
//In TypeScript, polymorphism is typically achieved through method overriding. 
//When a subclass overrides a method of its superclass, instances of the subclass can be treated as instances of the superclass, and the overridden method will be invoked dynamically based on the actual type of the object at runtime.


export ={}