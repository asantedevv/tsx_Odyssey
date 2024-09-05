"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Adds 2 to the provided number
function addTwo(num) {
    return num + 2;
}
// Calls addTwo with 5, returns 7
addTwo(5);
// Converts the given string to uppercase
function getUpper(val) {
    return val.toUpperCase();
}
// Calls getUpper with "Batman", returns "BATMAN"
getUpper("Batman");
// Registers a user with name, email, and payment status
function signUpUser(name, email, isPaid) { }
// Calls signUpUser with name, email, and payment status
signUpUser("Kwame", "vie97pie@gmail.com", false);
// Logs in a user with name, email, and optional payment status (default is false)
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// Calls loginUser with name, email, and default payment status (false)
loginUser("Ama", "ama13@gmail.com");
