//craeting a array
var userNames = ["bilal", "ali", "hadi", "admin", "haider"];
//using for each loop in array
userNames.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("Hello ".concat(oneUser, ",would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ",thank you for logging in again."));
    }
});
