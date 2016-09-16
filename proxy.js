var handler = {
    get: function(target, name) {
        if(name in target){
            return target[name];
        }else{
            return 'Error!!!';
        }
    }
};

var p = new Proxy({}, handler);

p.foo = 'bar';
p.bar = 'baz';

console.log(p.foo);
console.log(p.bar);
console.log(p.foobar);