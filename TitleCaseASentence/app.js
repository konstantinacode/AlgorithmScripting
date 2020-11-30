/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/
function titleCase(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        word = word.toLowerCase();
        word = word.replace(word.charAt(0), word.charAt(0).toUpperCase());
        arr[i] = word;
    }
    return arr.join(" ");
}

titleCase("I'm a liTtle tea pot");