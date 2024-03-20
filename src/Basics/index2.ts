// -------------------------------------------------------------------------------------------------------

// Nullish Coalesing Operator ??
let speed: number | null = null;
 
let ride  = {
    speed:speed ?? 30
}


// -------------------------------------------------------------------------------------------------------
// TYPE ASSERTIONS

let phone = document.getElementById('phone') as HTMLInputElement;
let username = <HTMLInputElement> document.getElementById('phone');
// HTMLElement
// HTMLInputElement
phone.value

// -------------------------------------------------------------------------------------------------------
// UNKNOWN TYPE (Instead of using any , if we use unknown the compiler forces us to do some type checking, so our program won;t get error)

function render2(document: unknown){
    if(typeof document === "string")
        document.toUpperCase()
}

// -------------------------------------------------------------------------------------------------------
// NEVER  TYPE

function reject(message: string): never{
    throw new Error(message);
}

reject("db error");
console.log("Hello world");
