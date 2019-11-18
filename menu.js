const menu = [
  { name: "Carrots", calories: 150 },
  { name: "Steak", calories: 350 },
  { name: "Broccoli", calories: 120 },
  { name: "Chicken", calories: 250 },
  { name: "Pizza", calories: 520 }
];
//Calcule a média do número de calorias do nosso array menu. Use reduce 
console.log(menu.length)
const mediaCalorias = menu.reduce((media, alimento) => media + alimento.calories / menu.length, 0);
console.log(mediaCalorias); // pq quando coloco parenteses na soma, a media muda para 115? 

// reduzindo um array de forma tradicional
var total = 0;
var numeros = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < numeros.length; i++) {
  total += numeros[i];
}
console.log(total);

// UTILIZANDO O REDUCE
var numeros = [1, 2, 3, 4, 5, 6];
var total = numeros.reduce((total, numero) => total + numero, 0); 
console.log(total);