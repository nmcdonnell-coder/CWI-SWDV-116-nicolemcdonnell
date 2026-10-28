function isStrongPassword(password) {
    const hasMinLength = password.length >= 12;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]|/<>?]/.test(password);
    const containsPassword = /password/i.test(password);
    const isStrong = hasMinLength &&
        hasUppercase &&
        hasLowercase &&
        hasNumber &&
        hasSpecialCharacter &&
        !containsPassword;
    if (isStrong) {
        console.log("Strong Password");
    } else {
        console.log("Weak Password");
    }

    return isStrong;
}
const password = prompt("Please enter a password:");
isStrongPassword(password || "");