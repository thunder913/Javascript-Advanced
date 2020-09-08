function solve(number) {
    const sameNumber = number%10;
    number = Math.floor(number/10);
    let sum = sameNumber;
    let areSame = true;
    while (number >= 10) {
        let currentNumber = number % 10;
        number = Math.floor(number/10);
        sum = +currentNumber + +sum;
        if (currentNumber !== sameNumber && areSame) {
            console.log(false);   
            areSame = false;
        }
    }
    sum = +number + +sum;
    if (sameNumber == number) {
            console.log(true);
    }else if(areSame)
    {
        console.log(false);
    }
    console.log(sum);
}

solve(99998)