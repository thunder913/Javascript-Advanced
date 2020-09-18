class Hex {
    constructor(value)
    {
        this.value = Number(value);
    }

    valueOf(){return this.value;}

    toString()
    {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(number)
    {
        let newHex = new Hex(this.value + +number);
        return newHex;
    }

    minus(number)
    {
        let newHex = new Hex(this.value - +number);
        return newHex;
    }
    
    parse(hex)
    {
        this.value = parseInt(hex,16);
        return new Hex(hex);
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
