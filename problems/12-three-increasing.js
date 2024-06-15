/* Write a function threeIncreasing that accepts an array of numbers as an
argument. The function should return a boolean indicating whether or not the
array contains three consecutive numbers in consecutive increasing order, like
7, 8, 9.
*/

// Your code here 
function threeIncreasing(numArr) {
    let booVal = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i + 3] - numArr[i + 2] === numArr[i + 2] - numArr[i + 1]) {
            booVal++;
        }
    }
    return booVal !== 0;


}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
console.log(threeIncreasing([2, 7, 8, 9]));                 // true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = threeIncreasing;