
// Class

class Account{
    readonly id:number;
    owner:string;
    private _balance:number;
    nickname?:string;

    constructor(id: number, owner:string, balance: number){
        this.id = id;
        this.owner = owner;
        this._balance = balance;
    }

    deposit(amount: number): void{
        if(amount<=0){
            throw new Error('Invalid Error')
        }
        this._balance += amount;
    }

    getBalance():number{
        return this._balance
    }
}

class b{
    constructor(){}

    print(){
        console.log("hello");
        
    }
}

let account = new Account(1,"Sreerag",1000);
account.deposit(7000);
console.log(account);

// For typeguard to narrow down the type with custom made obj, use instanceod
console.log(account instanceof Account);

// -------------------------------------------------------------------------------------------------------
// ACCESS CONTROL
    // account.balance = -1 error
console.log(account.getBalance());





