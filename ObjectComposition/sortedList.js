function list()
{
    let obj = (() =>{
    let arr = [];
    let sorting = (a,b) => a-b;
    let add = function(element)
    {
        this.size++;
        arr.push(element);
        arr.sort(sorting);
        return arr;
    }

    let remove = function(index)
    {
        if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
        this.size--;
        return arr;
        }
    }
    let get = function(index)
    {
        if (index >= 0 && index< arr.length) {
        return arr[index];
    }
}

    let size = 0;
    return {add,remove,get,size}
})();
return obj  ;
};

let a = list();
a.add(2);
a.add(3);

console.log(a.size);

a.remove(0);
console.log(a.size);