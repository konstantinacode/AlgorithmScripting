/*
Return an array consisting of the largest number from each provided sub-array. 
*/
function largestOfFour(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let largest = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (largest <= arr[i][j]) {
                largest = arr[i][j];
            }
        }
        array.push(largest);
    }
    console.log(array);
    return array;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);