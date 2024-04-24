//array of current users
let current_users =["hadi", "Ali", "fatima", "afza", "Maaz"];

//array of new users
let new_users =["haider", "ali", "bilal", "ayesha", "maaz"];

//loop through for new_users check for usernames avaibility
new_users.forEach(one_new_user => {
    
    //making a condition for username already exist and save in our_condition variable
    let our_condition =(current_users.some(current_one_user => current_one_user.toLowerCase() === one_new_user.toLowerCase()))
   
    //print different messages if-else statements
    if(our_condition){
       console.log(`Sorry ${one_new_user}, is already taken!`)
    }else{
        console.log(`This username ${one_new_user} is available`)
    }

})



    