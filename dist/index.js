"use strict";
let age = 20;
if (age < 50) {
    age += 10;
}
let sales = 123456789;
let course = 'TypeScript';
let isPublished = true;
let level;
function render(document) {
    console.log(document);
}
let nums = [1, 2, 3];
let user = [1, "Srg"];
;
let mySize = 2;
console.log(mySize);
function calculateTax(income) {
    return 0;
}
calculateTax(10);
function calculateTax2(income, year) {
    return 0;
}
calculateTax2(10);
let employee = { id: 1, name: "SRG" };
employee.id = 0;
let employee2 = { id: 1, name: "SRG" };
let employee3 = {
    id: 1,
    name: "Srg",
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let quantity2 = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("hola");
}
greet("sreerag");
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map