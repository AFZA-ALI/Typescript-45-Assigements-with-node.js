//creating a array
var pizza = ["creamy BBQ", "Chicken fajita", "tarzan tikka"];
//using a for-loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onepizza = pizza_1[_i];
    console.log("I Like ".concat(onepizza, " pizza"));
}
//print a message outside of the for-loop
console.log("I Really Love Pizza");
