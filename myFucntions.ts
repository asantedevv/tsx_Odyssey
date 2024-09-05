// Adds 2 to the provided number
function addTwo(num: number) {
    return num + 2;
}

// Converts the given string to uppercase
function getUpper(val: string) {
    return val.toUpperCase();
}

// Registers a user with name, email, and payment status
function signUpUser(name: string, email: string, isPaid: boolean) { }

// Logs in a user with name, email, and optional payment status (default is false)
let loginUser = (name: string, email: string, isPaid: boolean = false) => { }

// Calls addTwo with 5, returns 7
addTwo(5);

// Calls getUpper with "Batman", returns "BATMAN"
getUpper("Batman");

// Calls signUpUser with name, email, and payment status
signUpUser("Kwame", "vie97pie@gmail.com", false);

// Calls loginUser with name, email, and default payment status (false)
loginUser("Ama", "ama13@gmail.com");

export { };
