abstract class Shape {
    constructor(public color: string){
    }

    abstract render(): any
}

class Circle extends Shape{
    constructor(public radius: number, color: string){
        super(color)
    }

    override render(): void{
        console.log(`Drawing Circle with radius${this.radius}`);
    }
}

let shape = new Shape('red')
shape.render();        //This is not possible becz the shape is not complete ,its not a a real thing , so for stopping this we use abstract keyboard


// ABSTRACT is like an uncooked meal , another class has to extend it to use it.

