var things = [1, 2, 3, 4, 5];

things.map((thing) => {
    console.log(thing);
});

things.map(thing => console.log(thing));

var strings = things.map(thing => thing.toString());
console.log(things);
console.log(strings);

function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++;
    }, 1000);
}

var p = new Person();