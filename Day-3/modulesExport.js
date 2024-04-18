// first method
// module.exports.sumOfTwoNumbers = function(a, b){
//     let sum = a + b;
//     return sum;
// }

// second method

module.exports.countTillValue = function(value){
    let count =0;
    for(let i =1; i <= value; i++){
        count += i;
    }
    return count;
}

// module.exports = countTillValue;
