class Movie{
    constructor ( movieName, ticketPrice ){
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.profit = 0;
        this.soldTickets = 0;
    }

    newScreening(date, hall, description){
        if (this.screenings.some(s=>s.date === date && s.hall === hall)) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
        }
        let currentScreening = {
            date: date,
            hall: hall,
            description: description
        };
        this.screenings.push(currentScreening);
        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets){
        let currentMovie = this.screenings.find(x=>x.hall === hall && x.date === date);
        if (currentMovie === undefined) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }
        let currentProfit = soldTickets*this.ticketPrice;
        this.profit += currentProfit;
        this.soldTickets += +soldTickets;
        let removeIndex = this.screenings.indexOf(currentMovie);
        this.screenings.splice(removeIndex, 1);
        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`
    }

    toString(){
        let toReturn = `${this.movieName} full information:`;
        toReturn += `\nTotal profit: ${this.profit.toFixed(0)}$`;
        toReturn += `\nSold Tickets: ${this.soldTickets}`;
        if (this.screenings.length>0) {
            toReturn += "\nRemaining film screenings:";
            let screenings = this.screenings;
            screenings.sort((a,b) => compare(a.hall,b.hall));
            for (const item of screenings) {
                toReturn += `\n${item.hall} - ${item.date} - ${item.description}`;
            }
        }else{
            toReturn += "\nNo more screenings!";
        }
        return toReturn;
        
        function compare(a,b){
            if (a>b) {
                return 1;
            }else if(a<b){
                return -1;
            }
            return 0;
        }
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 10));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'Beta', `3D`));
console.log(m.endScreening('October 3, 2020', 'Main', 0));
console.log(m.toString());

m.newScreening('October 4, 2020', 'Avalon', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
