//define a function to print each magician from an array
function show_magicians(magicians: string[]){
     magicians.forEach(name => console.log(name));
}

//define an array containing magicians name
let magician_name =["harry poter", "ali", "gulzar"]

//call the function print each magician name
show_magicians(magician_name);