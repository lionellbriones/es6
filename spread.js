function foo(one, two, three){
    console.log(two);
};

var arr = [0, 1, 2, 3];
// foo.apply(null, arr);
foo(...arr);

//destructuring
var arr = [1, 2, 3, 4, 5];
var [a, b, ...theRest] = arr;

console.log(a, b, theRest);

// Array literals
var arrOne = ['thing', 'otherThing'];
console.log(['foo', 'bar', arrOne, 'baz']);
console.log(['foo', 'bar', ...arrOne, 'baz']);