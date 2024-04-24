//Creating a Guest List Array
var guestList = ["afza", "bilal", "asfa", "hadi"];
//Making variable for those guest who cant come
var dontCome = guestList[0];
//Print the name of guest who cant come
console.log(dontCome, "nhi aa skti");
//Add or Remove values from guest list array
guestList.splice(0, 1, "fatima");
//Message print for bigger table dinner
console.log("Good News ! we have found a bigger table dinner.");
//Adding a new value at starting index of array
guestList.unshift("Ali");
//Adding a new value at ending index of array
guestList.push("Sumaira");
//Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Tariq");
//Print message of updated list
console.log("Updated list of our guest ");
//Sending a invitation message to our guest one by one with their names
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to eat dinner with me?")); });
