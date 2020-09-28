class Bank{
    #bankName;
    constructor (bankName){
        this.#bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer){
        let thisCustomer = this.allCustomers.find(x=>x.personalId === customer.personalId);
        if (thisCustomer !== undefined) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        customer.transactions = [];
        customer.totalMoney = 0;
        this.allCustomers.push(customer);
        let customerReturn = {firstName:customer.firstName, lastName:customer.lastName, personalId:customer.personalId};
        return customerReturn;
    }
    depositMoney(personalId, amount){
        if (Number(personalId) !== NaN && Number(amount)!== NaN) {
        let thisCustomer = this.personCheck(personalId);
        thisCustomer.totalMoney += amount;
        thisCustomer.transactions.push(` made deposit of ${amount}$!`);
        return `${thisCustomer.totalMoney}$`;
    }
    }
    withdrawMoney(personalId, amount){
        if (Number(personalId) !== NaN && Number(amount)!== NaN) {
            let thisCustomer = this.personCheck(personalId);  
            if (amount > thisCustomer.totalMoney) {
                throw new Error(`${thisCustomer.firstName} ${thisCustomer.lastName} does not have enough money to withdraw that amount!`)
            }
            thisCustomer.totalMoney -= amount;
            thisCustomer.transactions.push(` withdrew ${amount}$!`);
            return `${thisCustomer.totalMoney}$`;
        }
    }

    customerInfo(personalId){
        let thisCustomer = this.personCheck(personalId);
        let toReturn = `Bank name: ${this.#bankName}`;
        toReturn += `\nCustomer name: ${thisCustomer.firstName} ${thisCustomer.lastName}`;
        toReturn += `\nCustomer ID: ${personalId}`
        toReturn += `\nTotal Money: ${thisCustomer.totalMoney}$`;
        toReturn += `\nTransactions:`;
    
        for (let i = thisCustomer.transactions.length-1; i >= 0; i--) {
            const transaction = thisCustomer.transactions[i];
            toReturn += `\n${i+1}. ${thisCustomer.firstName} ${thisCustomer.lastName}${transaction}`;
        }
        return toReturn;
    }
    personCheck(personalId){
        let thisCustomer = this.allCustomers.find(x=>x.personalId === personalId);
        if (thisCustomer === undefined) {
            throw new Error(`We have no customer with this ID!`);
        }    
        return thisCustomer; 
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "Svetlin", lastName: "Nakov", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Mihaela", lastName: "Mileva", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
