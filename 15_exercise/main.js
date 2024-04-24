var guestList = ["Afza", "Bilal", "Hadi", "fatima"];
var dontCome = guestList[0];
console.log(dontCome, "nhi aa skta");
guestList.splice(0, 1, "Asfa");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to eat dinner with me?")); });
