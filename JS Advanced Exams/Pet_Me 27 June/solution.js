function solve() {
    let inputs = document.querySelectorAll('input');
    let button = document.querySelector('button');
    button.addEventListener('click', onButtonClick);

    function onButtonClick()
    {
        let name = inputs[0].value;
        let age = inputs[1].value;
        let kind = inputs[2].value;
        let currentOwner = inputs[3].value;
        if (name === '' || age === '' || kind === '' || currentOwner === '' || !Number(age)) {
        }else
        {
            let adoptionTable = document.querySelector('#adoption ul');
            let toInput = document.createElement('li')
            let paragraph = document.createElement('p');
            paragraph.innerHTML = (`<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`)
            let spanElement = document.createElement('span');
            spanElement.innerText = `Owner: ${currentOwner}`;
            let button = document.createElement('button');
            button.innerText = 'Contact with owner';
            button.addEventListener('click', onContactClick);
            
            function onContactClick()
            {
                let divToInput = document.createElement('div');
                let input = document.createElement('input');
                this.innerText = 'Yes! I take it!';
                this.removeEventListener('click', onContactClick);
                input.placeholder = 'Enter your names';
                divToInput.appendChild(input);
                this.addEventListener('click', movePetClick);
                divToInput.appendChild(this);
                toInput.appendChild(divToInput);

                function movePetClick() {
                    currentOwner = input.value;
                    if (currentOwner !== '') {
                    let currentDiv = this.parentElement.parentElement;
                    let divToRemove = currentDiv.querySelector('div');
                    currentDiv.removeChild(divToRemove);
                    let buttonToAdd = document.createElement('button');
                    buttonToAdd.innerText = 'Checked';
                    buttonToAdd.addEventListener('click', removeFromAdopted);
                    currentDiv.appendChild(buttonToAdd);
                    currentDiv.querySelector('span').innerText =  `New Owner: ${currentOwner}`;
                    document.querySelector('#adopted ul').appendChild(currentDiv);
                    //currentDiv.removeChild(currentDiv);
                    
                    function removeFromAdopted() {
                        this.parentElement.parentElement.removeChild(this.parentElement);
                    }
                }
                }
            }
            toInput.appendChild(paragraph);
            toInput.appendChild(spanElement);
            toInput.appendChild(button);
            adoptionTable.appendChild(toInput);
        }

        for (const item of inputs) {
            item.value = '';
        }
    }

}

