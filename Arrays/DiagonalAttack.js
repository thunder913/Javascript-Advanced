function solve(params) {
    let array = new Array();

    let arrayDiagonalIndexes = new Array();
    for (const element of params) {
        let current = element.split(' ');
        array.push(current);
    }

    let sumLeft = 0;
    for (let i = 0; i < array.length; i++) {
        sumLeft += +array[i][i];
        arrayDiagonalIndexes.push([i,i]);
    }

    let sumRight = 0;
    for (let row = 0; row < array.length; row++) {
        sumRight += +array[row][array.length-1 - row];
        arrayDiagonalIndexes.push([row, array.length-1 - row]);
    }
    if (sumLeft === sumRight) {
        for (let row = 0; row < array.length; row++) {
            const element = array[row];
        }
    }
    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array.length; col++) {
            if (!AreXYInArray(arrayDiagonalIndexes,row,col))
             {
                array[row][col] = +sumLeft;
            }
        }
    }

    for (let i = 0; i < array.length; i++) {
        console.log(array[i].join(' '));
    }


    function AreXYInArray(array, x,y)
    {
        for (let i = 0; i < array.length; i++) {
            if (array[i][0] === x && array[i][1] === y) {
                return true;
            }
        }
        return false;
    }
}



solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);