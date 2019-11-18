// Métodos avançados MAP

const array = [1, 2, 3, 4, 8, 7];

const newArray = array.map(number => number * 2)

console.log(newArray);



// Mesmo exemplo mas usando o FOREACH

//ES5
const arrayES5 = [1, 2, 3];
const newArrayES5 = [];

arrayES5.forEach(function(number) {
    newArrayES5.push(number * 2);
});

console.log(newArrayES5);

//ES 6
const arrayES6 = [1, 2, 3];
const newArrayES6 = [];
arrayES6.forEach(number => newArrayES6.push(number * 2));

console.log(newArrayES6);

//////////////////////////////////
const foods = ["pizza", "sandwiches", "ice cream"];
const capsFoods = foods.map(food => food.toUpperCase());
console.log(capsFoods);


// Métodos avançados REDUCE
const people =[
    {name: "Mara", age: 30},
    {name: "Ricardo", age: 31},
    {name: "Aline", age: 25},    
    {name: "Thamires", age: 24},
];

const ages = people.reduce((sum, person) => {
    return sum + person.age;
},0);

console.log(ages);

// E se usar o forEach?
var numbers = [1, 2, 3, 4];
var total = 0;

numbers.forEach(function(number){
    total += number;
})

console.log(total)

//Métodos avançados FILTER
const numeros = [1, 2, 3, 4, 5, 6];
const evenNumbers = numeros.filter(number => number % 2 === 0);
console.log(evenNumbers);

//Métodos avançados SORT
const nums = [99, 30, 3, 55, 4, 98, 7, 84, 1];
nums.sort((a, b) => a - b);
console.log(nums);

nums.sort((a, b) => b - a);
console.log(nums);

//Métodos avançados REVERSE
const a = ['one', 'two', 'three'];
const reversed = a.reverse();
console.log(a);
console.log(reversed);