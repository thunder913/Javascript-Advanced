class Parking{
    constructor ( capacity ){
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar( carModel, carNumber ){
        if (this.vehicles.length >= this.capacity) {
            throw new Error('Not enough parking space.');
        }
        let car = {carModel, carNumber, payed: false};
        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar( carNumber ) {
        let car = this.vehicles.find(x=>x.carNumber === carNumber);
        if (!car) {
            throw new Error(`The car, you're looking for, is not found.`);
        }else if(!car.payed){
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        }
        let index = this.vehicles.indexOf(car);
        this.vehicles.splice(index, 1);
        return `${carNumber} left the parking lot.`;
    }

    pay( carNumber ) {
        let car = this.vehicles.find(x=>x.carNumber === carNumber);
        if (!car) {
            throw new Error(`${carNumber} is not in the parking lot.`);
        } else if(car.payed){
            throw new Error(`${carNumber}'s driver has already payed his ticket.`);
        }

        car.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`;
    }

    getStatistics(carNumber) {
        if (!carNumber) {
            let toReturn = [];
            toReturn.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`);
            let sortedCars = this.vehicles.sort((a,b)=> (a.carModel).localeCompare(b.carModel));
            for (const car of sortedCars) {
                toReturn.push(`${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`);
            }
            return toReturn.join('\n');
        }else{
            let car = this.vehicles.find(x=>x.carNumber === carNumber);
            return `${car.carModel} == ${car.carNumber} - ${car.payed ? 'Has payed' : 'Not payed'}`;
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));
