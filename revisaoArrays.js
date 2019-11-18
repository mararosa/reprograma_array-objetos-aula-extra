const students = [
  {
    name: "Tony Parker",
    firstProject: 80,
    secondProject: 75,
    finalExam: 90
  },
  {
    name: "Marc Barchini",
    firstProject: 84,
    secondProject: 65,
    finalExam: 65
  },
  {
    name: "Claudia Lopez",
    firstProject: 45,
    secondProject: 95,
    finalExam: 99
  },
  {
    name: "Alvaro Briattore",
    firstProject: 82,
    secondProject: 92,
    finalExam: 70
  },
  {
    name: "Isabel Ortega",
    firstProject: 90,
    secondProject: 32,
    finalExam: 85
  },
  {
    name: "Francisco Martinez",
    firstProject: 90,
    secondProject: 55,
    finalExam: 78
  },
  {
    name: "Jorge Carrillo",
    firstProject: 83,
    secondProject: 77,
    finalExam: 90
  },
  {
    name: "Miguel López",
    firstProject: 80,
    secondProject: 75,
    finalExam: 75
  },
  {
    name: "Carolina Perez",
    firstProject: 85,
    secondProject: 72,
    finalExam: 67
  },
  {
    name: "Ruben Pardo",
    firstProject: 89,
    secondProject: 72,
    finalExam: 65
  }
]
//function alunosModified()

const alunosModified = () => {
const finalGrades = students.map(theStudent => {
  const projectsAvg = (theStudent.firstProject + theStudent.secondProject)/2;
  const finalGrade  = theStudent.finalExam * 0.6 + projectsAvg * 0.4;
  return {
    name: theStudent.name,
    finalGrade: Math.round(finalGrade)
  }
})
return finalGrades;
}

const foods = ["pizza", "sandwiches", "ice cream"];

function foodUp() {
const capsFoods = foods.map(food => food.toUpperCase());
return capsFoods;
}  

const numbers = [2, 4, 6, 8];

function reduceExample() {
const total = numbers.reduce((accumulator, currentValue) => {
console.log("accumulator is: ", accumulator, "and current value is: ", currentValue);
return accumulator + currentValue;
});
return total;
}

const product = {
name: "AmazonBasics Apple Certified Lightning to USB Cable",
price: 7.99,
manufacter: "Amazon",
reviews:
[
  {  user: "Pavel Nedved",
    comments: "It was really usefull, strongly recommended",
    rate: 4
  },
  {  user: "Alvaro Trezeguet",
    comments: "It lasted 2 days",
    rate: 1
  },
  {  user: "David Recoba",
    comments: "Awesome",
    rate: 5
  },
  {  user: "Jose Romero",
    comments: "Good value for money",
    rate: 4
  },
  {  user: "Antonio Cano",
    comments: "It broked really fast",
    rate: 2
  },
]
}

function reduceModifiedExample () {
const totalReviews = product.reviews.reduce((sum,elem) => {
return sum += elem.rate;
},0);

const averageRate = totalReviews/product.reviews.length;
return averageRate;
}

const people = [
{ name: "Candice", age: 25 },
{ name: "Tammy", age: 30 },
{ name: "Allen", age: 20 },
{ name: "Nettie", age: 21 },
{ name: "Stuart", age: 17 },
{ name: "Bill", age: 19 }
];

function filterES5() {
const ofDrinkingAge = people.filter(function(person){
  return person.age >= 21;
});
return ofDrinkingAge;
}

const filterES6 = () => {
const ofDrinkingAge = people.filter(person => person.age >= 21);
return ofDrinkingAge;
}

const places = [
{
title: "Awesome Suite 20' away from la Rambla",
price: 200,
type: "Private Room",
pool: true,
garage: false
},
{
title: "Private apartment",
price: 190,
type: "Entire Place",
pool: true,
garage: true
},
{
title: "Apartment with awesome views",
price: 400,
type: "Entire Place",
pool: false,
garage: false
},
{
title: "Apartment in la Rambla",
price: 150,
type: "Private Room",
pool: false,
garage: true
},
{
title: "Comfortable place in Barcelona´s center",
price: 390,
type: "Entire place",
pool: true,
garage: true
},
{
title: "Room near Sagrada Familia",
price: 170,
type: "Private Room",
pool: false,
garage: false
},
{
title: "Great house next to Camp Nou",
price: 140,
type: "Entire place",
pool: true,
garage: true
},
{
title: "New apartment with 2 beds",
price: 2000,
type: "Entire place",
pool: false,
garage: true
},
{
title: "Awesome Suite",
price: 230,
type: "Private Room",
pool: false,
garage: false
},
{
title: "Apartment 10' from la Rambla",
price: 930,
type: "Entire place",
pool: true,
garage: true
}
]

function filterPoolES5() {
const poolFilter = places.filter(function(thePlace) {
  return thePlace.pool;
});
return poolFilter;
}

const filterPoolES6 = () => {
const poolFilter = places.filter(element=> element.pool)
return poolFilter;
}

/*const words = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];

words.sort();

console.log(words); */

/*const words = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];

words.sort().reverse();

console.log(words); */


/*const words = ["hello", "goodbye", "first", "a", "a", "second", "third"];

words.sort((a, b) => {
  if (a > b){
      return -1;
  }

  if (a < b){
      return 1;
  }

  return 0;
});

console.log(words.reverse()); */

/* const words = ["Hello", "Goodbye", "First", "A", "a", "Second", "Third"];

words.sort((a, b) => {
  if (a.length > b.length){
      return -1;
  }

  if (a.length < b.length){
      return 1;
  }

  return 0;
});

console.log(words.reverse()); */

//filterPoolES6();
// filterES5();
//filterES6();
//reduceModifiedExample();
//reduceExample();
// alunosModified();
// foodUp();

const numbers1 = [2, 4, 6, 8, 10, 12, 25, 30, 40, 60, 100];

[ , ...rest ] = numbers1;

console.log(rest, "hehehe");


/*[ ...c ] = [...numbers1];
console.log(c); */
