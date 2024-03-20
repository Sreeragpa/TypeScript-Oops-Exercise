function getData(timer:number):Promise<unknown>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            
            resolve(`Resolved in ${timer} milliseconds`)
        }, timer);
    })
}


async function app(){
    let data =  await getData(1000);
    return data
}

async function app2():Promise<any>{
    let data =  await getData(1000);
    return data
}

interface Useree {
    name:string,
    phone:number
}

interface PremiumUser extends Useree{
    premiumValidity:string
}

class Persontt implements PremiumUser{
  constructor(public name:string ,  private _phone:number, public premiumValidity:string){
        
  }
  get phone(){
    return this._phone
  }
}


enum Sizes{
    small,
    medium,
    large
}
