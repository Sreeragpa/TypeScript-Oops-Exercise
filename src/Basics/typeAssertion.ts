const str1:any = "Sreerag";

const strSzie:number= (str1 as string).length;
console.log(strSzie);


// const myInput = document.getElementById("my-input") as HTMLInputElement;
// let myValue = myInput.value;


let totalSum: any = 100;
let finalValue = <number> totalSum + 100;
console.log(finalValue);


class Spotify {
    constructor(public song:string){}
    playmusic():void{
        console.log("Playing Music")
    }
}

class SpotifyPremium extends Spotify {
    playmusic(): void {
        console.log("Playing music without ad");
    }
     download() :void{
        console.log("Downloading Music");
        this.song
     }
}

const user1 = new SpotifyPremium("Kabira");
user1.playmusic();
user1.download();

const user2 = new Spotify("Kabira");
user2.playmusic();

console.log(user1,user2);

class Facebook{
    private static _userVisit:number = 0;

    addAccount(username:string){
        console.log("User created");
        Facebook._userVisit++;
    }

    logIn(username:string){
        console.log("Logged IN");
        Facebook._userVisit++;
    }

    static get userVisit(){
        return this._userVisit
    }
}

const myaccount = new Facebook();
myaccount.addAccount("sreerag")
myaccount.addAccount("sreerag2")
myaccount.logIn("sreerag2")
console.log(Facebook.userVisit);






interface Fruit{
    fruitType:string,
    quantity:number,
    buy():void
}
class CD implements Fruit{
    constructor(public fruitType:string,public quantity:number){
        this.fruitType = fruitType;
        this.quantity = quantity;
    }
    private _buy(): void {
        console.log(`Bought ${this.quantity} of ${this.fruitType}`);
        
    }
    buy(): void {
        this._buy()
    }
}

const myCD = new CD("mango",80);

myCD.buy()