function solve([params]) {
    let board = "[[false, false, false], [false, false, false], [false, false, false]]");
    PrintBoard(board);
}


function PrintBoard(input) {
    for (let index = 0; index < input.length; index++)
     {
        let printArray = Array(input[index]);
        console.log(printArray);
    }
}
solve([]);