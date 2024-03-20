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
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value <= 0)
            throw new Error('Invalid Amount');
        this._balance = value;
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
console.log(account.balance);
class SeatAssignments {
}
let seats = new SeatAssignments();
seats.A1 = 'Sreerag';
seats['A2'] = 'mosh';
module.exports = {};
//# sourceMappingURL=oops3.js.map