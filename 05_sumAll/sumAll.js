const sumAll = function(firstNumber,secondNumber) {
    let largeNumber = 0;
    let smallNumber = 0;
   
    if (firstNumber > secondNumber){
    largeNumber = firstNumber;
    smallNumber = secondNumber;
   }
   else{
    largeNumber = secondNumber;
    smallNumber = firstNumber;
   }
    sum = 0;
    if(smallNumber < 0 || largeNumber < 0){
        return "ERROR";
    }
    else if (!Number.isInteger(smallNumber) || !Number.isInteger(largeNumber)){
        return "ERROR";
    }
    else{for(let i = smallNumber; i <= largeNumber; i++){
        sum += i;
    }}
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
