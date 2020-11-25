/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
    let longest = 0;
    let strings = str.split(" ");
    for (let i = 0; i < strings.length; i++) {
        if (strings[i].length >= longest) {
            longest = strings[i].length;
        }
    }
    return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");