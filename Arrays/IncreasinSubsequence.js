function solve([...array]) {
    array.reduce((acc, currentValue, index) =>
    {
        if (currentValue > array[index+1]) {
            acc = +currentValue;
            array.splice(index+1,1);
        }
    },Number.MIN_SAFE_INTEGER);

    array.forEach(el => console.log(el));
}
solve([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3,
    2, 
    24]
    
    )