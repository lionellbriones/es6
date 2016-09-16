// var one = ["foo", "bar", "baz"];
var one = {
    foo: 'Hello',
    bar: 'Hi',
    baz: 'Hello again'
}

// var [foo, bar, baz] = one;
var {foo, bar, baz} = one;

console.log(foo, bar, baz);