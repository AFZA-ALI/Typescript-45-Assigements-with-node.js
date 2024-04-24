//array of current users
var current_users = ["hadi", "Ali", "fatima", "afza", "Maaz"];
//array of new users
var new_users = ["haider", "ali", "bilal", "ayesha", "maaz"];
//loop through for new_users check for usernames avaibility
new_users.forEach(function (one_new_user) {
    //making a condition for username already exist and save in our_condition variable
    var our_condition = (current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === one_new_user.toLowerCase(); }));
    //print different messages if-else statements
    if (our_condition) {
        console.log("Sorry ".concat(one_new_user, ", is already taken!"));
    }
    else {
        console.log("This username ".concat(one_new_user, " is available"));
    }
});
