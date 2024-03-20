"use strict";
class Account {
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Invalid Error');
        }
        this.balance += amount;
    }
}
let account = new Account(1, "Sreerag", 1000);
account.deposit(7000);
console.log(account);
// 
console.log(account instanceof Account);
//# sourceMappingURL=oops.js.map