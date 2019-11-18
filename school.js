
const schoolSystem = {
  schools: [
    {
      name: "Fake School 1",
      classRooms: [
        {
          teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
          students: [
              { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
              { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
              { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
              { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
              { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
            ]
        },
        {
          teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
          students: [
            { firstName: 'Manley', lastName: 'Doyle', age: 18 },
            { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
            { firstName: 'Sid', lastName: 'Rohan', age: 30 },
            { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
            { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
          ]
        }
      ]
     },
     {
      name: "Fake School 2",
      classRooms: [
        {
          teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
          students: [
            { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
            { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
            { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
            { firstName: 'Rickie', lastName: 'White', age: 22 },
            { firstName: 'Rose', lastName: 'Collins', age: 30 }
          ]
        },
        {
          teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
          students: [
            { firstName: 'Melany', lastName: 'Welch', age: 25 },
            { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
            { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
            { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
            { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
           ]
         }
       ]
	 },
	 {
      name: "Fake School 3",
      classRooms: [
        {
          teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
          students: [
            { firstName: 'Christop', lastName: 'Hahn', age: 26 },
            { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
            { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
            { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
            { firstName: 'Maudie', lastName: 'Haley', age: 30 }
          ]
        },
        {
          teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
          students: [
            { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
            { firstName: 'Lois', lastName: 'Kulas', age: 28 },
            { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
            { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
            { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
          ]
        }
      ]
    }
  ]
};


//Adicione um estudante com o nome "Lucille D. Lozano" a 
//"Fake School 2", na primeira "classe/sala de aula"

function add () {
schoolSystem.schools[1].classRooms[0].students.push({firstName: 'Lucille', lastName: 'D. Lozano'});

console.log(schoolSystem.schools[1].classRooms[0].students);
}

add();

//Retorne o objeto "Fake School 3"
console.log(schoolSystem.schools[2]);

//Retorne o professor que tem o primeiro nome "Natanael"
console.log(schoolSystem.schools[2].classRooms[1].teacher.firstName);

//Retorne o estudante que tem o primeiro nome "Saul"
console.log(schoolSystem.schools[2].classRooms[0].students[3].firstName);

