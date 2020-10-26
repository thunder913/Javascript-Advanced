function solve() {
    let divForms = document.querySelectorAll('div[class=form-control]');
    let lectureName = divForms[0].querySelector('input');
    let date = divForms[1].querySelector('input');
    let module = divForms[2].querySelector('select');
    let defaultModuleValue = 'Select module';
    let addButton = divForms[3].querySelector('button');
    let trainingsDiv = document.querySelector('div[class=modules]');
    addButton.addEventListener('click', (e)=>{
        e.preventDefault();

        if (lectureName.value !== '' && date.value !== '' && module.value !== defaultModuleValue) {
            let moduleToUpper = module.value.toUpperCase() + '-MODULE';
            let existingDiv = undefined;
            let addedItems = Array.from(document.querySelectorAll('div[class=module]'));
            for (let i = 0; i < addedItems.length; i++){
                let currValue = addedItems[i].querySelector('h3').innerText;
                if (moduleToUpper === currValue) {
                    existingDiv = addedItems[i];
                    break;
                }
            }

        if (existingDiv === undefined) {
           let divToAdd = document.createElement('div');
           divToAdd.setAttribute('class', 'module');
           
           let h3 = document.createElement('h3');
           h3.innerText = `${moduleToUpper}`;

           let ul = document.createElement('ul');
           
           let liElement = document.createElement('li');
           liElement.setAttribute('class', 'flex');

           let h4Time = document.createElement('h4');
           let dateValue = getDateFormat(date.value);
        
           h4Time.innerText = lectureName.value + ' - ' + dateValue;

           let deleteButton = document.createElement('button');
           deleteButton.setAttribute('class', 'red');
           deleteButton.innerText = 'Del';
           deleteButton.addEventListener('click', (e)=>onDeleteButtonClick(e))
           
           liElement.appendChild(h4Time);
           liElement.appendChild(deleteButton);
           
           ul.appendChild(liElement);
           divToAdd.appendChild(h3);
           divToAdd.appendChild(ul);


           trainingsDiv.appendChild(divToAdd);
           existingDiv = divToAdd;
        }else{
            let liElement = document.createElement('li');
            liElement.setAttribute('class', 'flex');
 
            let h4Time = document.createElement('h4');
            let dateValue = getDateFormat(date.value);
         
            h4Time.innerText = lectureName.value + ' - ' +  dateValue;
 
            let deleteButton = document.createElement('button');
            deleteButton.setAttribute('class', 'red');
            deleteButton.innerText = 'Del';
            deleteButton.addEventListener('click', (e)=>onDeleteButtonClick(e))
 
            liElement.appendChild(h4Time);
            liElement.appendChild(deleteButton);
            existingDiv.querySelector('ul').appendChild(liElement);
        };

        
        let ulToSort = existingDiv.querySelector('ul');
        
        let items = ulToSort.querySelectorAll('li');
        let sortedItems = Array.from(items).sort((a,b)=> compare(a,b));

        while (ulToSort.firstChild) {
            ulToSort.removeChild(ulToSort.firstChild);
        }

        for (const item of sortedItems) {
            ulToSort.appendChild(item);
        }

        
    }
    })

    function compare(a,b){
        let aDate = a.querySelector('h4').innerText.split(' ');
        aDate.splice(0,2);
        let dateA = aDate.join(' ');
        
        let bDate = b.querySelector('h4').innerText.split(' ');
        bDate.splice(0,2);
        let dateB = bDate.join(' ');
        return dateA.localeCompare(dateB);
    }
    function onDeleteButtonClick(e){
        let liElement = e.target.parentElement;
        let ulElement = liElement.parentElement;
        liElement.remove();

        if (!ulElement.firstChild) {
            ulElement.parentElement.remove();
        }
    }
    function getDateFormat(dateValue){
        let time = new Date(dateValue);
        let days = time.getDate();
        let month = time.getMonth()+1;
        let year = time.getFullYear();
        let hour = time.getHours();
        let minutes = time.getMinutes();

        if (year < 10) {
            year = '000' + year;
        }else if (year<100) {
            year = '00' + year;
        } else if(year < 1000){
            year = '0' + year;
        }
        days = formatNumberWith0(days);
        month = formatNumberWith0(month);
        hour = formatNumberWith0(hour);
        minutes = formatNumberWith0(minutes);

        return `${year}/${month}/${days} - ${hour}:${minutes}`;
    }

    function formatNumberWith0(num){
        if (num<10) {
            num = '0' + num;
        }
        return num;
    }

};