//Creating a array for 5 values
let userNames = ["bilal", "ali", "hadi", "admin", "haider"];

//Remove all values from an array , now our array is empty
userNames = []

//If statement for checking length of our array is empty?
if (userNames.length === 0){
    console.log("Your array is empty We need to find some users!")
}else{
    //using for each loop in array
userNames.forEach(oneUser =>{
    if(oneUser === "admin"){
      console.log(`Hello ${oneUser},would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser},thank you for logging in again.`)
    }
})
}