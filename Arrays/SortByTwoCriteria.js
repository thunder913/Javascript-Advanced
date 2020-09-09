function solve([...array]) {

        array =array.sort(compare);
        function compare(a,b)
        {
            if (a.length > b.length) {
                return 1;
            }else if(a.length < b.length)
            {
                return -1
            }else
            {
             return a.toLowerCase().localeCompare(b.toLowerCase());
        }

    }
    array.forEach(x=>console.log(x));
}

solve(['test', 
'Deny', 
'omen', 
'Default']
)

