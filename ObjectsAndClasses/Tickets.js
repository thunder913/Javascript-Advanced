function solve(input, sorting)
{
    class Ticket
    {
        constructor(destination, price, status)
        {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let array = new Array();
    for (const item of input) {
        let [destination, price, status] = item.split('|');
        price = parseFloat(price)
        let ticket = new Ticket(destination, price, status);
        array.push(ticket);
    }

    switch (sorting) {
        case 'destination':
            array.sort(compareDestination);
            break;
        case 'price':
            array.sort(comparePrice);
            break;
        case 'status':
            array.sort(compareStatus);
            break;
    }

    return array;

    function compareDestination(a,b)
    {
        let aDestination = a.destination;
        let bDestination = b.destination;
        return CompareItems(aDestination,bDestination);
    }
    function comparePrice(a,b){
        let aPrice = Number(a.price);
        let bPrice = Number(b.price);
        return CompareItems(aPrice,bPrice);
    }
    function compareStatus(a,b)
    {
        let aStatus = a.status;
        let bStatus = b.status;
        return CompareItems(aStatus,bStatus);}

    function CompareItems(a,b)
    {
        if (a > b) {
            return 1;
        }else if (a < b) {
            return -1;
        } 
        return 0;
    }
}


console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
));