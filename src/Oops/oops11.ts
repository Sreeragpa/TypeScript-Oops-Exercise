// -------------------------------------------------------------------------------------------------------
// KEYOF OPERATOR

//  T is Product
//  keyof T => 'name' | 'price'

interface Product {
    name: string; 
    price: number;
}

class Store<T>{
    protected objects: T[] = [];

    add(obj: T): void{
        this.objects.push(obj);
    }

    find(property: keyof T, value: unknown): T | undefined{
        return this.objects.find(obj => obj[property] === value)
    }
}

let store = new Store<Product>()

store.add({name:"a",price:100});
store.find('name','a')
store.find('price',100) 

export = {}


