//define the functions to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array of magicians name 
var magician_name = ["harry poter", "ali", "gulzar"];
//making a copy of original array through .slice() function
var copy_magicians_name = magician_name.slice();
//modify the copied array to include "The Great" with their names
var make_great_magicians = make_great(copy_magicians_name);
//show both array original and copied
//original
console.log("Original Array\n");
show_magicians(magician_name);
//copied
console.log("\nCopied Array\n");
show_magicians(make_great_magicians);
