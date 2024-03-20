"use strict";
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
let ride2 = new Ride();
ride1.start();
ride2.start();
console.log(Ride.activeRides);
//# sourceMappingURL=oops4.js.map