function getFibonator()
{
    this.firstNum;
    this.secondNum;

    if (this.firstNum === undefined) {
        this.firstNum = 0;
        this.secondNum = 1;
    }

    function calculate(){
    this.nextNum = this.firstNum+this.secondNum;
    this.firstNum = this.secondNum;
    this.secondNum = this.nextNum
    return this.firstNum};
    return calculate;
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5sss
console.log(fib()); // 8
console.log(fib()); // 13
