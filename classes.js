class Person {
    constructor(age, height){
        this.age = age;
        this.height = height;        
    }

    get detail() {
        return `${this.age} ${this.height}`;
    }
}

var person = new Person(28, "6 Feet"); 

console.log(person.detail);


class Cat {
    constructor(name){
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise`);
    }
}

class Lion extends Cat {
    speak(){
        // super.speak();
        console.log(`${this.name} says roar`);
    }
}

var meow = new Lion('Moo');
meow.speak();