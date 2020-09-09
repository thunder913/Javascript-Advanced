function solve([...params]) {
    let numberOfShifts = params.pop() % params.length;

    for (let i = 0; i < numberOfShifts; i++) {
        const lastNumber = params.pop();
        params.unshift(lastNumber);
    }
    console.log(params.join(' '));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'1000000']

);