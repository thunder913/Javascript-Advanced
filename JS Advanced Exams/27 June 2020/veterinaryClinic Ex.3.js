class VeterinaryClinic{
    constructor (clinicName, capacity){
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.petsCount = 0;
    }
    getOwner(ownerName){
        return this.clients.find(x=>x.name === ownerName);
    }
    
    calculateWorkload(){
        let number = this.petsCount/this.capacity;
        return Math.floor(number*100);
    }

    newCustomer(ownerName, petName, kind, ...procedures){
        if (this.petsCount >= this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        }
        let client = this.getOwner(ownerName);
        let currentPet = {
            name: petName,
            kind: kind,
            procedures: procedures
        };
        if(client === undefined){
            let newClient = {
                name: ownerName,
                pets:[currentPet]
            };
            this.clients.push(newClient);
            this.petsCount++;
            return `Welcome ${petName}!`;
        }else if(client.pets.find(x=>x.name === petName)){
            let currProcedures = client.pets.find(x=>x.name === petName).procedures;
            if (currProcedures.length) {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${client.pets.find(x=>x.name === petName).procedures[0].join(', ')}.`);
            }else{
                for (const proc of procedures) {
                    currProcedures.push(proc);
                    return `Welcome ${petName}!`;
                }
        }
        }else{
            client.pets.push(currentPet);
            this.petsCount++;
            return `Welcome ${petName}!`;
        }
    }

    onLeaving(ownerName, petName){
        let owner = this.getOwner(ownerName);
        if (owner === undefined) {
            throw new Error("Sorry, there is no such client!");
        }else if (!owner.pets.find(x=>x.name === petName) 
                    || owner.pets.find(x=>x.name === petName).procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${ petName }!`);
        }
        let currentPet = owner.pets.find(x=>x.name === petName);
        let proceduresCount = currentPet.procedures[0].length;
        currentPet.procedures = [];
        this.totalProfit += proceduresCount*500;
        this.petsCount--;
        return `Goodbye ${ petName }. Stay safe!`;
    }

    toString(){
        let toReturn = '';
        toReturn += `${this.clinicName} is ${this.calculateWorkload()}% busy today!\n`;
        toReturn += `Total profit: ${this.totalProfit.toFixed(2)}$`;
        let orderedOwners = this.clients.sort((a,b)=> this.compareNames(a.name,b.name));
        for (const owner of orderedOwners) {
            let orderedPets = owner.pets.sort((a,b)=> this.compareNames(a.name, b.name));
            toReturn += `\n${owner.name} with:`
            for (const pet of orderedPets) {
                let joinedProcedures = pet.procedures.length ? pet.procedures[0].join(", ") : '';
                toReturn += `\n---${pet.name } - a ${pet.kind.toLowerCase()} that needs: ${joinedProcedures}`
            }
        }
        return toReturn;
    }

    compareNames(a,b){
        if(a < b) { return -1; }
        if(a > b) { return 1; }
    return 0;
    }
}

let clinic = new VeterinaryClinic('SoftCare', 6);
console.log(clinic.newCustomer('Jim Jones', 'Tom1', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Jim Jones', 'Tom2', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Jim Jones', 'Tom3', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.newCustomer('Ivailo Gerensi', 'Tiny', 'Cat', ['A154B'])); 
console.log(clinic.onLeaving('Jim Jones', 'Tom1'));
console.log(clinic.newCustomer('Jim Jones', 'Tom1', 'Cat', ['A154B']));
console.log(clinic.toString())