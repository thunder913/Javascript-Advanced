function attachEventsListeners() {
    let boxOptionArray = new Array();
    let options = document
                        .querySelector('select')
                        .querySelectorAll('option');

    for (const option of options) {
        boxOptionArray.push(option.value);
    }
    let button = document.querySelector('input[type=button]');
    button.addEventListener('click', onClick);

    function onClick()
    {
        let inputValue = document.querySelector('input[type=text]').value;
        let fromOption = boxOptionArray[document.querySelectorAll('select')[0].selectedIndex];
        let toOption = boxOptionArray[document.querySelectorAll('select')[1].selectedIndex];
        let inputInMetres = 0;
        let result = 0;
        switch (fromOption) {
                case 'km':
                inputInMetres = inputValue*1000;
                break;
                case 'm':
                inputInMetres = inputValue;
                break;
                case 'cm':
                inputInMetres = inputValue*0.01;
                break;
                case 'mm':
                inputInMetres = inputValue*0.001;
                break;
                case 'mi':
                inputInMetres = inputValue*1609.34;
                break;
                case 'yrd':
                    inputInMetres = inputValue*0.9144;
                break;
                case 'ft':
                inputInMetres = inputValue*0.3048;
                break;
                case 'in':
                inputInMetres = inputValue * 0.0254;
                break;
        }

        switch (toOption) {
            case 'km':
            result = inputInMetres/1000;
            break;
            case 'm':
            result = inputInMetres;
            break;
            case 'cm':
            result = inputInMetres/0.01;
            break;
            case 'mm':
            result = inputInMetres/0.001;
            break;
            case 'mi':
            result = inputInMetres/1609.34;
            break;
            case 'yrd':
                result = inputInMetres/0.9144;
            break;
            case 'ft':
            result = inputInMetres/0.3048;
            break;
            case 'in':
            result = inputInMetres/ 0.0254;
            break;
    }
    document.querySelector('#outputDistance').value = result;
    }
}