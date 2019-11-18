// classes[0][0].firstName  Traz o valor nome 'Tomas'
// classes[0][3].firstName  Traz o valor nome 'Lulu'
// classes[1][4].age        Traz o valor age 22
// classes[0][1]            Traz o array inteiro { firstName: 'Nico', lastName: 'Schamberger', age: 26 },


const classes = [
  [
    { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
    { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
    { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
    { firstName: 'Lulu', lastName: 'Considine', age: 20 },
    { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
  ],
  [
    { firstName: 'Charlie', lastName: 'Rolfson', age: 23 },
    { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
    { firstName: 'Emie', lastName: 'Franecki', age: 29 },
    { firstName: 'Okey', lastName: 'Runte', age: 18 },
    { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
  ],
  [
    { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
    { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
    { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
    { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
    { firstName: 'Stanley', lastName: 'Hand', age: 22 }
  ],
  [
    { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
    { firstName: 'Mervin', lastName: 'Blick', age: 28 },
    { firstName: 'Damien', lastName: 'Rohan', age: 28 },
    { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
    { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
  ],
  [
    { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
    { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
    { firstName: 'Braeden', lastName: 'Walker', age: 26 },
    { firstName: 'Derick', lastName: 'Weber', age: 22 },
    { firstName: 'Robert', lastName: 'Beatty', age: 30 }
  ]
];

//Retorne a segunda informação de classe. 
console.log(classes[0][1]);

// Retorne o nome "Antonette".
console.log(classes[4][0].firstName);

// Retorne a idade 18
console.log(classes[1][3].age);

//Retorne o último nome de "Beatty".
console.log(classes[4][4].lastName);
