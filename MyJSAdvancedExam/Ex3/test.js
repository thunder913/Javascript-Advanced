let user = {name: 'john'};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name',{
    writable: false
});

console.log(descriptor);