//define a function with a rest parameter that accepts items arguments representing our sandwich
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow enjoy your Sandwich");
}
//Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Mayo", "Cheese", "Egg");
makeSandwich("Bread", "Egg");
makeSandwich("Tomato", "Cucumber", "Chicken", "Mayo", "Cheese", "Egg", "Butter");
