const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = (arr) => arr.map(x => x*2);
const calculateSum = (arr) => arr.reduce((x,y) => x + y);

const doubledNumbers = doubleNumbers(numbers);
const sum = calculateSum(doubledNumbers);

const person = {
    name: "John",
    age: 30,
    introduce: function() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
};

console.log(`The sum of doubled numbers is: ${sum}`);
console.log(person.introduce());
