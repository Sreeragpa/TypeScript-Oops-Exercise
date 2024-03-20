// -------------------------------------------------------------------------------------------------------
// TYPE MAPPING


interface Product {
    name: string; 
    price: number;
}

type ReadOnlyProduct = {
    readonly [Property in keyof Product]: Product[Property]
}


type Optional = {
     [Property in keyof Product]?: Product[Property]
}