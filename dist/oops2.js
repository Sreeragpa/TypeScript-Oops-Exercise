"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid Error');
        }
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
class b {
    constructor() { }
    print() {
        console.log("hello");
    }
}
let account = new Account(1, "Sreerag", 1000);
account.deposit(7000);
console.log(account);
module.exports = {};
//# sourceMappingURL=oops2.js.map