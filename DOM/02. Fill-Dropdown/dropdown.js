function addItem() {
    let text = document.getElementById('newItemText');
    let value = document.getElementById('newItemValue');
    let option = document.createElement('option');
    let menu = document.getElementById('menu');
    option.text = text.value;
    option.value = value.value;
    menu.appendChild(option);
    text.value = '';
    value.value = '';
}