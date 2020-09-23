(function(){
    Array.prototype.last= function(){
        let array = this;
        return array[array.length-1];
    }
    Array.prototype.skip = function(n)
    {
        return this.slice(n, this.length);
    }

    Array.prototype.take = function(n)
    {
        return this.slice(0, n);
    }

    Array.prototype.sum = function()
    {
        return this.reduce((acc,cur) => {return acc+cur},0)
    }

    Array.prototype.average = function()
    {
        return this.sum() / this.length;
    }
}())


let a = new Array();
a.push(1);
a.push(2);
a.push(3);
a.push(4);
a.push(5);
a.push(6);
a.push(7);

console.log(a.average());
