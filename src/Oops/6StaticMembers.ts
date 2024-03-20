// STATIC MEMBERS

// class Ride {
//     static  activeRides: number = 0; // now this property belongs to the Ride class not to the ride object  
//     start(){Ride.activeRides++;}
//     stop(){Ride.activeRides--;}
// }

// let ride1 = new Ride();
// let ride2 = new Ride();

// ride1.start();
// ride2.start();

// console.log(Ride.activeRides); 




class Ride {
     private static _activeRides: number = 0; // with (static) now this property belongs to the Ride class not to the ride object  
    //Here i can directly modify activeRides with Ride._activeRides , so making it private solves the problem
    start(){Ride._activeRides++;}
    stop(){Ride._activeRides--;}

    static get activeRides(){
        return Ride._activeRides
    }

}


let ride1 = new Ride();
let ride2 = new Ride();

ride1.start();
ride2.start();

console.log(Ride.activeRides); 
 


