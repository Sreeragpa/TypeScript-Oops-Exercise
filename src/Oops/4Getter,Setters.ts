
// GETTERS AND SETTERS

class Account1{
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

    get balance():number{
        return this._balance
    }

    set balance(value: number){
        if(value<=0)
            throw new Error('Invalid Amount')
        this._balance = value
    }
}

// class b{
//     constructor(){}

//     print(){
//         console.log("hello");
        
//     }
// }

let account1 = new Account1(1,"Sreerag",1000);
account1.deposit(7000);
console.log(account1.balance);


// -------------------------------------------------------------------------------------------------------





// export = {}

