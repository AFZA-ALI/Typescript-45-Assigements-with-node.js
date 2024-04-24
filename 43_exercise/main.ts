//define the functions to show magicians name
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name))
}

//function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

//define an array of magicians name 
let magician_name =["harry poter", "ali", "gulzar"]

//making a copy of original array through .slice() function
let copy_magicians_name = magician_name.slice()

//modify the copied array to include "The Great" with their names
let make_great_magicians = make_great(copy_magicians_name)

//show both array original and copied
 
//original
console.log("Original Array\n")
show_magicians(magician_name)

//copied
console.log("\nCopied Array\n")
show_magicians(make_great_magicians )