//Define variables
var mango = "mango";
var uppercaseMango = "MANGO";
var ten = 10;
var twenty = 20;
var fruits = ["mango", "banana", "orange"];
//Test for equality and inequality with strings
console.log("Is mango is equal to mango?");
console.log(mango == "mango");
console.log("\nIs mango is not equal to mango?");
console.log(mango != "mango");
//Tests using lowercase function
console.log("\nIs MANGO is equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() == "mango");
console.log("\nIs MANGO is equal to mango after converting to lowercase?");
console.log(uppercaseMango.toLowerCase() != "mango");
//Numerical tests
//equal
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//not equal
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
//greater than
console.log("\nIs ten is greater than zero?");
console.log(10 > 0);
//less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);
//Greater than or equals to
console.log("\nIs ten is greater than or equals to 5?");
console.log(ten >= 5);
//less than or equal to
console.log("\nIs twenty is less than ar equals to 10?");
console.log(twenty <= 10);
//Test using "and" or "or" operators
//using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\ntwenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 30);
//using || (OR)
console.log("\ntwenty is greater than 50 OR 20 is equal to 20?");
console.log(twenty > 50 || 20 == 20);
console.log("\ntwenty is greater than 50 OR 20 is not equal to 20?");
console.log(twenty > 50 || 20 != 20);
//Test whether an item include in array
console.log("\nIs orange include in my fruits array?");
console.log(fruits.includes("orange"));
//not include
console.log("\nIs orange is not include in my fruits array?");
console.log(!fruits.includes("orange"));
