    function solve() {
        let buttons = document
        .querySelectorAll('button');

        for (const button of buttons) {
            button.addEventListener('click', onClick);
        }
        function onClick()
        {
            let thisButton = this;
            let expressionOutput = document.querySelector('#expressionOutput');
            let resultOutput = document.querySelector('#resultOutput');
           if(this.value === 'Clear'){
            expressionOutput.innerHTML = '';
            resultOutput.innerHTML = ''; 
            }else if(this.value === '='){
                try{
                    resultOutput.innerHTML = eval(expressionOutput.innerHTML);
                }catch
                {
                    resultOutput.innerHTML = NaN;
                }
            }
            else if (!Number(thisButton.value) && thisButton.value !== '.' && thisButton.value != 0) {
                if (expressionOutput.innerHTML) {
                    expressionOutput.innerHTML = expressionOutput.innerHTML + ' ' + thisButton.value + ' ';
                } else {
                    expressionOutput.innerHTML = thisButton.value;
                }
            } else {
                expressionOutput.innerHTML += thisButton.value;
            }
        }
    }