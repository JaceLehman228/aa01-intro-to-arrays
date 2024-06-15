/*
Define a function called minVal that takes in an array of numbers as a
parameter. The function should return the smallest number of the array. If the
array is empty, the function should return null.
*/

// Your code here 
function minVal(numArr) {
    if (numArr.length === 0) {
        return null;
    } else {
        let arrIter = numArr[0]
        let i = 0
        while (i < numArr.length) {
            if (arrIter > numArr[i]) {
                arrIter = numArr[i];
                i++;
            } else {
                i++;
            }
        }
        return arrIter;
    }
}

console.log(minVal([4, 6, 3, 5, 2, 4])); // 2
console.log(minVal([-2, -3, -7, 3 ]));   // -7
console.log(minVal([])); //null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = minVal;