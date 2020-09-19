function solve(input, factor)
{
    if (factor === 'asc') {
        return input.sort((a,b) => a-b);
    } else if(factor === 'desc'){
        return input.sort((a,b)=> b-a);
    }
}

console.log(solve([14, 7, 17, 6, 8], 'desc'));