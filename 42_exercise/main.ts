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

//call make_great function to modify magicians name
let great_magicians = make_great(magician_name)

//call show_magicians that show modified list of magicians
show_magicians(great_magicians)