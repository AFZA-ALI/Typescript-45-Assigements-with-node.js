//making a array of countries and print its orignial order
let countriesToVisit: string[] =["China", "Dubai" , "Brazil" , "America"];
console.log("Orignial order:", countriesToVisit);

//print the array in alphabetical order without modifying the actual array list
console.log("Alphabetical order:", [...countriesToVisit].sort());

// show that the array still in its original order
console.log("still in original order:", countriesToVisit)

//print the array in reverse order without modifying the actual array list
console.log("Reverse order:", [...countriesToVisit].reverse());

// show that the array still in its original order
console.log("still in original order:", countriesToVisit)

// we have changed the original array order now
console.log("Original array reserved:", countriesToVisit.reverse());

//print the array to show that its back to its original order
console.log("back to original order:", countriesToVisit.reverse());

//print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical order:", countriesToVisit.sort());

// we have changed again the original array order now in reversed order again
console.log("Original array reserved:", countriesToVisit.reverse());
