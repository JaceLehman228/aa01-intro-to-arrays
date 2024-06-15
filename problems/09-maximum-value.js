/*
Define a function called maxVal that takes in an array of numbers as a
parameter. The function should return the largest number of the array. If the
array is empty, the function should return null.
*/

// Your code here 
function maxVal(numArr) {
    if (numArr.length === 0) {
        return null;
    } else {
        let arrIter = numArr[0]
        let i = 0
        while (i < numArr.length) {
            if (arrIter < numArr[i]) {
                arrIter = numArr[i];
                i++;
            } else {
                i++;
            }
        }
        return arrIter;
    }
}

console.log(maxVal([4, 6, 3, 5, 42, 4])); // 42
console.log(maxVal([-2, -3, -7, 3 ]));    // 3
console.log(maxVal([]));                  // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxVal;