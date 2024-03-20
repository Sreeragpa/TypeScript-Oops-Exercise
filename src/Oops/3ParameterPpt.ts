
// PARAMETER PROPERTIES

class Account{
    nickname?:string;

    constructor(
        public readonly id: number, 
        public owner:string, 
        private _balance: number){
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





