function solve(input) {
    
    let allSums = new Array();
    for (let r = 0; r < input.length; r++) {
        let sum = 0;
        for (let c = 0; c < input.length; c++) {
            sum += input[r][c];
        }
        allSums.push(sum);
    }

    for (let c = 0; c < input.length; c++) {
        let sum = 0
        for (let r = 0; r < input.length; r++) {
            sum+= input[r][c];
        }
        allSums.push(sum);
    }
    return allSums.every(el=> el === allSums[0]);

}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   ));