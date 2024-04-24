//craeting a array
let userNames = ["bilal","ali","hadi","admin","haider"];

//using for each loop in array
userNames.forEach(oneUser =>{
    if(oneUser === "admin"){
      console.log(`Hello ${oneUser},would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser},thank you for logging in again.`)
    }
})