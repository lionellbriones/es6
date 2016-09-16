function* neverEnding(){
    let index = 0;

    while(index < 2){
        yield index++;
    }
}

let gen = neverEnding();

do{
    var curr = gen.next();
    if(!curr.done) console.log(curr);
}while(!curr.done);

function* anotherGenerator(i){
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* generator(i){
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

var newGen = generator(10);

console.log(newGen.next());
console.log(newGen.next());
console.log(newGen.next());
console.log(newGen.next());
console.log(newGen.next());
console.log(newGen.next());