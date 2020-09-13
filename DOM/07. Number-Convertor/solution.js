function solve() {
    let optionMenu = document.getElementById('selectMenuTo');
    let optionBinary = document.createElement('option');
    let optionHexadecimal = document.createElement('option');
    optionBinary.setAttribute('value', 'binary');
    optionHexadecimal.setAttribute('value', 'hexadecimal')
    optionBinary.innerText = 'Binary';
    optionHexadecimal.innerText = 'Hexadecimal';
    optionMenu.appendChild(optionBinary);
    optionMenu.appendChild(optionHexadecimal);
    let button = document.querySelector('button');
    button.addEventListener('click', onClick);
    let result = document.getElementById('result');
    function onClick()
    {
        let number = Number(document.getElementById('input').value); 
        let selectedOption = optionMenu.value;
        if (selectedOption === 'binary') {
            result.value = convertDecimalToBinary(number);
        }else
        {
            result.value = decimalToHexString(number);
        }
    }


    function decimalToHexString(number)
    {
    if (number < 0)
    {
        number = 0xFFFFFFFF + number + 1;
    }

    return number.toString(16).toUpperCase();
    }
    function convertDecimalToBinary(number){
        var binary = "";
        var temp = number;
     
        while(temp > 0){
            if(temp % 2 == 0){
                binary = "0" + binary;
            }
            else {
                binary = "1" + binary;
            }
    
            temp = Math.floor(temp / 2);
        }
    
        return binary;
    }
}