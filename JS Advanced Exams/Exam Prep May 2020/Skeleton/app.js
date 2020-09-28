function solve() {
    let sections = document.querySelectorAll('section');
    let openSection = sections.item(1);
    let inProgressSection = sections.item(2);
    let completeSection = sections.item(3);
    let openDiv = openSection.querySelectorAll('div').item(1);
    let inProgressDiv = inProgressSection.querySelectorAll('div').item(1);
    let completeDiv = completeSection.querySelectorAll('div').item(1);

    let task = document.querySelector('#task');
    let description = document.querySelector('#description');
    let dueDate = document.querySelector('#date');

    let addButton = document.querySelector('#add');
    addButton.addEventListener('click', addButtonClick);

    function addButtonClick(e){
    e.preventDefault();
    if (task.value !== '' && description.value !== '' && dueDate.value !== '') {
    let article = document.createElement('article');
    
    let h3 = document.createElement('h3');
    h3.innerText = task.value;
    
    let paragraphOne = document.createElement('p');
    paragraphOne.innerText = `Description: ${description.value}`;
    
    let paragraphTwo = document.createElement('p');
    paragraphTwo.innerText = `Due Date: ${dueDate.value}`;

    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'flex');

    let startButton = document.createElement('button');
    startButton.setAttribute('class', 'green');
    startButton.innerText = 'Start';

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'red');
    deleteButton.innerText = 'Delete';

    startButton.addEventListener('click', onStartButtonClick);
    deleteButton.addEventListener('click', onDeleteButtonClick);


    divElement.appendChild(startButton);
    divElement.appendChild(deleteButton);

    article.appendChild(h3);
    article.appendChild(paragraphOne);
    article.appendChild(paragraphTwo);
    article.appendChild(divElement);
    openDiv.appendChild(article);
    }
    }

    function onStartButtonClick(e){
        let buttonDiv = e.target.parentElement;
        let article = e.target.parentElement.parentElement;
        onDeleteButtonClick(e);
        article.removeChild(buttonDiv);
        let divElement = document.createElement('div');
        divElement.setAttribute('class', 'flex');

        let finishButton = document.createElement('button');
        finishButton.setAttribute('class', 'orange');
        finishButton.innerText = 'Finish';
        finishButton.addEventListener('click', onFinishButtonClick);
        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'red');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', onDeleteButtonClick);

        divElement.appendChild(deleteButton);
        divElement.appendChild(finishButton);
        article.appendChild(divElement);
        inProgressDiv.appendChild(article);
    }

    function onFinishButtonClick(e){
        let target = e.target;
        let article = target.parentElement.parentElement;
        inProgressDiv.removeChild(article);
        let buttonDiv = target.parentElement;
        article.removeChild(buttonDiv);
        completeDiv.appendChild(article);

    }

    function onDeleteButtonClick(e){
        let article = e.target.parentElement.parentElement;
        e.target.parentElement.parentElement.parentElement.removeChild(article);
    }
}