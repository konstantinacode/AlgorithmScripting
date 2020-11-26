/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
*/
function confirmEnding(str, target) {
    let check = new RegExp(target + "$", "i");
    return check.test(str);
}

confirmEnding("Bastian", "n");