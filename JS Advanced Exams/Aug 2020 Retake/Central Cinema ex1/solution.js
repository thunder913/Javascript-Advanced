function solve() {
    let onScreenButton = document.querySelector('button');
    onScreenButton.addEventListener('click', onScreenClick);
    function onScreenClick(){
        let inputs = document.querySelectorAll('input');
        let name = inputs[0];
        let hall = inputs[1];
        let price = inputs[2];

        if (name.value !== '' && hall.value !== '' && IsNumber(price.value)) {
            let liItem = document.createElement('li');
            
            let spanElement = document.createElement('span');
            spanElement.innerText = name.value;
            liItem.appendChild(spanElement);

            let strongElement1 = document.createElement('strong');
            strongElement1.innerText = 'Hall: ' + hall.value;
            liItem.appendChild(strongElement1);

            let divElement = document.createElement('div');
            let strongElement2 = document.createElement('strong')
            strongElement2.innerText = parseFloat(price.value).toFixed(2);
            let inputElement = document.createElement('input');
            inputElement.setAttribute('placeholder', 'Tickets Sold');
            let buttonElement = document.createElement('button');
            buttonElement.innerText = 'Archive';

            buttonElement.addEventListener('click', onArchiveClick);
            divElement.appendChild(strongElement2);
            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);
            liItem.appendChild(divElement);
            document.querySelector('ul').appendChild(liItem);
        }
        for (const input of inputs) {
            input.value = '';
        }
    }

    let buttons = document.querySelectorAll('button');
    let clearButton = buttons[buttons.length-1];
    clearButton.addEventListener('click', clearButtonClick);
    
    function clearButtonClick(e){
        let ulElement = e.target.parentElement.querySelector('ul');
        let liElements = ulElement.querySelectorAll('li');
        for (const li of liElements) {
            ulElement.removeChild(li);
        }
    }


    function onArchiveClick(e){
        let target = e.target;
        let ticketsSold = target.parentElement.querySelector('input').value;
        if (IsNumber(ticketsSold)) {
        let price = target.parentElement.querySelector('strong').innerText;
        let profit = price*ticketsSold;
        let spanValue = target.parentElement.parentElement.querySelector('span').innerText;

        let archilveUl = document.querySelector('section[id=archive] ul');
        let elementToRemove = target.parentElement.parentElement;
        target.parentElement.parentElement.parentElement.removeChild(elementToRemove);

        
        let newLiElement = document.createElement('li');
        let spanElement = document.createElement('span');
        spanElement.innerText = spanValue;
        let strongElement = document.createElement('strong');
        strongElement.innerText = `Total amount: ${parseFloat(profit).toFixed(2)}`;
        let buttonElement = document.createElement('button');
        buttonElement.innerText = 'Delete';
        
        buttonElement.addEventListener('click', onDeleteClick);
        newLiElement.appendChild(spanElement);
        newLiElement.appendChild(strongElement);
        newLiElement.appendChild(buttonElement);
        archilveUl.appendChild(newLiElement);

        }
    }

    function onDeleteClick(e){
        let liElement = e.target.parentElement;
        e.target.parentElement.parentElement.removeChild(liElement);
    }
    
    function IsNumber(num){
        return !Number.isNaN(+num) && num !== '';
    }
}   