function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let text = document.getElementById('extra');
    if (text.style.display == 'none') {
        text.style.display = 'block';
    }else
    {
        text.style.display = 'none';
    }

    if (button.innerHTML === 'More') {
        button.innerHTML = 'Less';
    } else {
        button.innerHTML = 'More';
    }
}