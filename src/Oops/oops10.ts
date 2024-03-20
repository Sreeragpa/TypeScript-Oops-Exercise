// GENERIC CLASSES (Make reusable)
// Generics provide variables to types. 
// A common example is an array. An array without generics could contain anything. 
// An array with generics can describe the values that the array contains.

//Generics allow you to define functions or components that can work with different data types without needing to write separate functions for each type.
//<T> acts as a placeholder for any data type.

class KeyValuePair<T>{
    constructor(public key:T,public value: string){}
}

let pair = new KeyValuePair<string>('1',"heh");
let pair2 = new KeyValuePair<number>(1,"heh");

// -------------------------------------------------------------------------------------------------------

// We can add two generics by <T,V>

// GENERIC FUNCTIONS


function wrapInArray<T>(value: T){
    return [value];
}



let wrappeditem = wrapInArray<number>(1)
let wrappeditem2 = wrapInArray("apple")


// GENERIC INTERFACE

interface Result<T>{
    data: T | null;
    error: string | null;
}

function fetch<T>(url:string): Result<T>{
    return { data:null, error:null}
}

interface User{
    username: string;
}

interface Products{
    title: string;
}

let userResult = fetch<User>("user123");
let productResult = fetch<Products>("prd");

userResult.data?.username;
productResult.data?.title;


// GENERIC CONSTRAINTS

function echo<T extends string | number>(value: T): T{
    return value
}

echo("hii")
echo(34)
// echo(true)

function echo2<T extends {name: string}>(value: T): T{
    return value
}

echo2({name:"sreerag"})



function echo3<T extends User>(value: T): T{
    return value
}

echo3({username:"sreerag"});
 

// EXTENDING GENERIC CLASSES

interface Product {
    name: string; 
    price: number;
}

class Store<T>{
    protected objects: T[] = [];

    add(obj: T): void{
        this.objects.push(obj);
    }
}

    // Pass on the generic type parameter
class CompressibleStore <T> extends Store<T>{
    compress(){ }
}

let store = new CompressibleStore<Product>()

// Restricting generic type parameter 
// class SearchableStore<T extends {name: string}> extends Store<T>{
//     find(name: string): T | undefined{
//         return this.objects.find(obj  => obj.name === name)
//     }
// }

// Fixing the generic type parameter
class ProductStore extends Store<Product>{
    filterByCategory(category: string): Product[]{
        return [] 
    }
}
