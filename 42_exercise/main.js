//define the functions to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array of magicians name 
var magician_name = ["harry poter", "ali", "gulzar"];
var great_magicians = make_great(magician_name);
show_magicians(great_magicians);
