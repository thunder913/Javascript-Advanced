function subtract() {
    let numberOne = Number(document.getElementById('firstNumber').value);
    let numberTwo = Number(document.getElementById('secondNumber').value);

    let result = numberOne - numberTwo;

    document.getElementById('result').textContent = result;
}