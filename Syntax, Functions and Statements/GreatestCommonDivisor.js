function GetCommonDivisor(numberOne, numberTwo) {
    let smallerNumber = numberOne;
    if (numberOne > numberTwo) 
    {
        smallerNumber = numberTwo;   
    }

    let largestDivisor = 1;
    for (let i = 2; i <= smallerNumber; i++) {
        if (numberOne % i == 0 && numberTwo % i == 0) {
            largestDivisor = i;
        }
        
    }

    return largestDivisor;
}