function solve([...arrayInput]) {
    let array = new Array();
    arrayInput.reduce((acc, currentValue) => {
        if (currentValue === 'add') {
            array.push(acc);
        } else {
            array.pop();
        }
        return acc + 1;
    }, 1);
    if (array.length) {
        array.forEach(item => console.log(item));
    } else {
        console.log('Empty');
    }
}

solve(['add', 
'add', 
'add', 
'add']
)