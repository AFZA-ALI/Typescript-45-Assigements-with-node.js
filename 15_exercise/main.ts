let guestList = ["Afza","Bilal","Hadi","fatima"];

let dontCome =guestList[0];

console.log(dontCome, "nhi aa skta");

guestList.splice (0,1, "Asfa");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to eat dinner with me?`));