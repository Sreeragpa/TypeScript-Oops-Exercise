class A{
    private b:B

    constructor(b:B){
        this.b = b
    }

    hello(){
        console.log(this.b.print());
        
    }

}

class B{
    constructor(){}

    print(){
        console.log("hello");
        
    }
}

let bb= new B()
let aa = new A(bb);

