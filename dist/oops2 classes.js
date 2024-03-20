"use strict";
class A {
    constructor(b) {
        this.b = b;
    }
    hello() {
        console.log(this.b.print());
    }
}
class B {
    constructor() { }
    print() {
        console.log("hello");
    }
}
let bb = new B();
let aa = new A(bb);
//# sourceMappingURL=oops2%20classes.js.map