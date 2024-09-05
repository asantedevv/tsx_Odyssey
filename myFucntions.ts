// Adds 2 to the provided number
function addTwo(num: number) {
    return num + 2;
}

// Calls addTwo with 5, returns 7
addTwo(5);

// Converts the given string to uppercase
function getUpper(val: string) {
    return val.toUpperCase();
}

// Calls getUpper with "Batman", returns "BATMAN"
getUpper("Batman");

// Registers a user with name, email, and payment status
function signUpUser(name: string, email: string, isPaid: boolean) { }

// Calls signUpUser with name, email, and payment status
signUpUser("Kwame", "vie97pie@gmail.com", false);

// Logs in a user with name, email, and optional payment status (default is false)
let loginUser = (name: string, email: string, isPaid: boolean = false) => { }

// Calls loginUser with name, email, and default payment status (false)
loginUser("Ama", "ama13@gmail.com");


export { };