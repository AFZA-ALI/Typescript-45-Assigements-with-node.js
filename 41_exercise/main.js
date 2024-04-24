//define a function to print each magician from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define an array containing magicians name
var magician_name = ["harry poter", "ali", "gulzar"];
//call the function print each magician name
show_magicians(magician_name);
