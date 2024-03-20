// DECORATORS
// Are attributes that we apply to classes and members to change how they behave 
//  Here the Component Decorator converts the ProfileComponent to a component for a web application 
@Component
 class ProfileComponent {
     
 }

// -------------------------------------------------------------------------------------------------------
 
//  CLASS DECORATOR

function Component(constructor: Function){
    console.log("Component Decorator Called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertINDOM = ()=>{
        console.log("Inserting the component in the DOM");
        
    }
}

@Component

 class ProfileComponent1 {
     
 }


// -------------------------------------------------------------------------------------------------------
//  DECORATOR COMPOSITION
// Here pipe will be called first then component , it works like  f(g(x))
@Component
@pipe
 class ProfileComponent1 {
     
 }

// -------------------------------------------------------------------------------------------------------
// Method Decorators

function Log(target:any, methodName: string, descriptor: PropertyDescriptor){
    const original = descriptor.value as Function;
    descriptor.value = function(){
        console.log("Before ");
        original.call(this, "Blue sky")
        console.log("After");
    }
}

class Person{
    @Log
    say(message: string){
        console.log("Person says "+ message);
        
    }
}   

let person = new Person();
person.say("Hello")

// ACCESSSSOR DECORATOR

function Capitalize(target:any, methodName: string, descriptor: PropertyDescriptor ){
    const original = descriptor.get;

    descriptor.get = function(){
        const result = original?.call(this);
        return(typeof result === "string")? result.toUpperCase(): result
    }
}

class Persons{
    constructor(public firstName: string, public lastName: string){}

    @Capitalize
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}


// PROPERTY DECORATOR

function MinLength(length: number){
    return (target: any, propertyName: string) =>{
        let value: string;
        let descriptor: PropertyDescriptor = {
            get(){return value},
            set (newValue: string){
                if(newValue.length <length)
                    throw new Error(`${propertyName} should be at least ${length}`)
                value = newValue;
            }
        }
        Object.defineProperty(target, propertyName, descriptor)
    } 
}

 export class User{
    @MinLength(4)
    password: string
    constructor( password: string){
        this.password = password
    }
}

let user2 = new User('1234') 

// PARAMETER DECORATOR


// export = {}