function encodeAndDecodeMessages() {
    let buttons = document.querySelectorAll('button');
    for (const button of buttons) {
        button.addEventListener('click', onClick);
    }

    function onClick(e) {
        if (e.target.innerText === 'Encode and send it') {
            let textarea = document.querySelectorAll('textarea')[0];
            let valueToEncode = textarea.value;
            let outputValue = '';
            for (let i = 0; i < valueToEncode.length; i++) {
                outputValue += String
                    .fromCharCode(valueToEncode.charCodeAt(i)+1);
            }
            document.querySelectorAll('textarea')[1].value = outputValue;
            textarea.value = '';
        } else if(e.target.innerText === 'Decode and read it'){
            let textarea = document.querySelectorAll('textarea')[1];
            let valueToDecode = textarea.value;
            let outputValue = '';
            for (let i = 0; i < valueToDecode.length; i++) {
                outputValue += String
                    .fromCharCode(valueToDecode.charCodeAt(i)-1);
            }
            textarea.value = outputValue;
        }
    }

}