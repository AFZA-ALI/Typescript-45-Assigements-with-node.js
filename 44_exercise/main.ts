//define a function with a rest parameter that accepts items arguments representing our sandwich
function makeSandwich (...items :string[]){
    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow enjoy your Sandwich");
}
//Call the function 3 times with 3 different number of arguments
makeSandwich("Chicken", "Mayo", "Cheese", "Egg");

makeSandwich("Bread", "Egg");

makeSandwich("Tomato", "Cucumber", "Chicken", "Mayo", "Cheese", "Egg","Butter");