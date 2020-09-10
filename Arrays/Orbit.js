function solve([rows,cols,starX,starY])
{

    let array = new Array();
    for (let i = 0; i < rows; i++) {
        array.push(new Array(cols));
        array[i].fill(0)
    }
    array[starX][starY] = 1;
    while(anythingLeft(array)){
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (array[row][col] == 0) {
                continue;
            }
            let currentNumber = array[row][col]+1;

            for (let rowAround = row-1; rowAround <= row+1; rowAround++) {
                for (let colAround = col-1; colAround <= col+1; colAround++) {
                    if (rowAround < 0 || rowAround >= rows || colAround < 0 || colAround >= cols) {
                        continue;
                    } 
                    if (array[rowAround][colAround] === 0) {
                        array[rowAround][colAround] = currentNumber;
                    }
                }
            }
        }
    }
}
    for (let row = 0; row < array.length; row++) {
        console.log(array[row].join(' '));
    }
    function anythingLeft(array) {
        for (let row = 0; row < array.length; row++) {
            for (let col = 0; col < array.length; col++) {
                if (array[row][col] == 0) {
                    return true;
                }
            }
        }
        return false;
    }
    
}

solve([5, 5, 2, 2]);