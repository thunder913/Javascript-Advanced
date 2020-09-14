function attachEventsListeners() {
    let buttons = document.querySelectorAll('body div input[type = button]');

    for (const button of buttons) {
        button.addEventListener('click', onClick);
    }

    function onClick()
    {
        let inputField = this.parentElement
        .querySelector('input[type=text]');
        let thisValue = inputField.value; 
        let days = 0,minutes = 0,hours=0,seconds=0;

       let valueType = this
                .parentElement
                .querySelector('label').innerText.toLowerCase();
        valueType = valueType.substring(0, valueType.length - 1);

        switch (valueType) {
            case 'days':
                days = thisValue;
                hours = days*24;
                minutes = hours*60;
                seconds = minutes*60;
             break;
             case 'hours':
                 hours = thisValue;
                 days = hours/24;
                minutes = hours*60;
                seconds = minutes*60;
             break;
             case 'minutes':
                 minutes = thisValue;
                 hours = minutes/60;   
                 seconds = minutes*60;
                 days = hours/24;
             break;
             case 'seconds':
                 seconds = thisValue;
                 minutes = seconds/60;
                 hours = minutes/60;
                 days = hours/24;
             break;
        }
        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }
}