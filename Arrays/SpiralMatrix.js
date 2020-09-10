function solve(rows, cols)
{
    let array = new Array();
    for (let i = 0; i < rows; i++) {
        array.push(new Array(cols));
        array[i].fill(0);
    }

    let rowModifier = 0;
    let colModifier = 1;

    let row = 0;
    let col = 0;
    for (let i = 1; i <= rows*cols; i++) {
        array[row][col] = i;
        if ((row == 0 && rowModifier == -1) || (row == array.length-1 && rowModifier == 1)
            || array[row+rowModifier][col+colModifier] != 0) {
            rowModifier = 0;
            if (col + 1 != 0 && col+1 < cols && array[row][col+1] == 0) {
                colModifier = 1;
            }else
            {
                colModifier = -1;
            }
        }
        if ((col == 0 && colModifier == -1) || (col == array.length-1 && colModifier == 1)
                || array[row+rowModifier][col+colModifier] != 0) {
            colModifier = 0;
            if (row + 1 != 0 && row+1 < rows && array[row+1][col] == 0) {
                rowModifier = 1;
            }else
            {
                rowModifier = -1;
            }
        }
        
        row += rowModifier;
        col += colModifier;
    }
for (let i = 0; i < array.length; i++) {
    console.log(array[i].join(' '));
}
}

solve(100,100)