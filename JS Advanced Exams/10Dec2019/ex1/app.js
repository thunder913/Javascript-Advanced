function solution() {
    let sections = document.querySelectorAll('section');
    let addGiftSection = sections[0];
    let listGiftsSection = sections[1];
    let sentGiftsSection = sections[2];
    let DiscardedGiftsSection = sections[3];
    let addGiftButton = addGiftSection.querySelector('button');
    addGiftButton.addEventListener('click', onAddButtonClick);

    function onAddButtonClick(){
        let ulElement = listGiftsSection.querySelector('ul');
        let input = addGiftSection.querySelector('input');

        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'gift');
        liElement.innerText = input.value;

        let sendButton = document.createElement('button');
        sendButton.setAttribute('id', 'sendButton');
        sendButton.innerText = 'Send';
        sendButton.addEventListener('click', onSendButtonClick);

        let discardButton = document.createElement('button');
        discardButton.setAttribute('id', 'discardButton');
        discardButton.innerText = 'Discard';
        discardButton.addEventListener('click', onDiscardButtonClick);

        liElement.appendChild(sendButton);
        liElement.appendChild(discardButton);

        ulElement.appendChild(liElement);
        input.value = '';

        let sortedLi = Array.from(ulElement.querySelectorAll('li'))
            .sort((a,b)=> compare(a.innerText, b.innerText));
    
        while (ulElement.firstChild) {
            ulElement.removeChild(ulElement.firstChild);
        }

        for (const element of sortedLi) {
            ulElement.appendChild(element);
        }
    }

    function onSendButtonClick(e){
        let liElement = getLiElement(e);
        let ulElement = sentGiftsSection.querySelector('ul')
        
        ulElement.appendChild(liElement);
    }

    function onDiscardButtonClick(e){
        let liElement = getLiElement(e);
        let ulElement = DiscardedGiftsSection.querySelector('ul');
        ulElement.appendChild(liElement);
    }

    function getLiElement(e){
        let liElement = e.target.parentElement;
        e.target.parentElement.parentElement.removeChild(liElement);
        let buttons = liElement.querySelectorAll('button');
        liElement.removeChild(buttons[0]);
        liElement.removeChild(buttons[1]);
        return liElement;
    }

    function compare(a,b){
        if (a>b) {
            return 1;
        }else if (a<b) {
            return -1;
        }
        return 0;
    }
}