// TypeScript extends this list with a few more, such as any (allow anything), 
// unknown (ensure someone using this type declares what the type is), 
// never (it’s not possible that this type could happen), and 
// void (a function which returns undefined or has no return value).

let age: number = 20;
if (age < 50) {
    age += 10;
}

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let isPublished = true;  //No need to annotate becz it initialized with boolean ,so it will be having type boolean
let level;  //Here level will be of type "any"


function render(document: any) {
    console.log(document);
}

// -------------------------------------------------------------------------------------------------------

// Array

let nums: number[] = [1, 2, 3]

// -------------------------------------------------------------------------------------------------------

// Tuples (Fixed length array where each element has a particular type)

let user: [number, string] = [1, "Srg"];

// -------------------------------------------------------------------------------------------------------


// Enums
// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

// -------------------------------------------------------------------------------------------------------

// functions

function calculateTax(income: number): number {
    return 0;
}

calculateTax(10)

function calculateTax2(income: number, year?: number): number {
    return 0;
}

calculateTax2(10)

// -------------------------------------------------------------------------------------------------------

// Object
let employee: {
    id: number,
    name: string
} = { id: 1, name: "SRG" };
employee.id = 0


let employee2: {
    readonly id: number,
    name: string
} = { id: 1, name: "SRG" };
// employee2.id = 0  

// -------------------------------------------------------------------------------------------------------

// ALIAS  (using type alias we can create custom types )

type Emp = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee3: Emp = {
    id: 1,
    name: "Srg",
    retire: (date: Date) => {
        console.log(date);

    }
}
// -------------------------------------------------------------------------------------------------------

// UNION TYPES (giving multiple type)

function kgToLbs(weight: number | string): number {
    // Narrowing 
    if (typeof weight === 'number') {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }

}
// -------------------------------------------------------------------------------------------------------
// INTERSECTION TYPES

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

// -------------------------------------------------------------------------------------------------------
// LITERAL TYPES (exact or specifc value .... Limit the values where we assign a variable )

// let quantity: 50 | 100 = 100
type Quantity = 50 | 100;

let quantity: Quantity = 50;
let quantity2: Quantity = 100;

type Metric = 'cm' | 'inch'

// -------------------------------------------------------------------------------------------------------
// NULLABLE TYPES

function greet(name: string | null) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("hola");
}

greet("sreerag")
greet(null)

// -------------------------------------------------------------------------------------------------------
// OPTIONAL CHAINING 

type Customer = {
    birthday: Date
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0);
// (Optional Property Access Operator)
console.log(customer?.birthday);

// (Optional Element Access Operator)

// customers?.[0]

// (Optional Call Access Operator)
let log: any = null;
log?.('a')
