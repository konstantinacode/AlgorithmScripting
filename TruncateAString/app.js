/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/
function truncateString(str, num) {
    let returnedStr = "";
    for(let i=0; i<num; i++){
      returnedStr += str.charAt(i);
    }
    if(num < str.length){
      returnedStr += "...";
    }
    return returnedStr;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);
  