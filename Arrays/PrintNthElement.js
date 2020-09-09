function solve([...array]) {
    let nElement = array.pop();
    for (let i = 0; i < array.length; i++) {
        if (i % nElement === 0) {
            console.log(array[i]);
        }
        
    }
}

solve(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);

