class Stringer
{
    constructor(innerString, innerLength)
    {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(number)
    {
        this.innerLength += Number(number);
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    decrease(number)
    {
        this.innerLength -= Number(number);
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString()
    {
        let returnString = this.innerString.substring(0,this.innerLength);
        if (returnString === this.innerString) {
            return returnString;
        } else {
            returnString += '...';
        }
        return returnString;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
