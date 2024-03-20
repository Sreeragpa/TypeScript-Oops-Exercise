// INTERFACES

// If there is no logic inside the class , only we want to do some type checking , then interface is better
// Interface is like a stricter Abstract


interface Calendar{
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

interface CloudCalendar extends Calendar{
    sync(): void;
}

class GoogleCalendar implements Calendar{
    constructor(public name: string){}
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
     
}