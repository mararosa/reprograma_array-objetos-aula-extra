const cities = ["miami", "barcelona", "madrid", "amsterdam", "berlin", "sao paulo", "lisbon", "mexico city", "paris"];

// Dado um array de cidades retorne um novo array com a primeira letra de forma maiúscula. O array se encontra no arquivo city.js
const capsPrimeiraLetra = cities.map(city => city.charAt(0).toUpperCase());
console.log(capsPrimeiraLetra);

//SLICE muda ao array removendo ou substituindo um elemento.
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// // Using slice, create newCar from myCar.
// var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
// var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
// var newCar = myCar.slice(0, 2);
// console.log(newCar)

// //indexOF
// var cep = "22.000-000";
// var cepFormatado = false;
    
// if(cep.indexOf(".") == 2 && cep.indexOf("-") == 6){
//     cepFormatado = true;
// }

// console.log(cepFormatado)

// //Neste exemplo desejamos deixar apenas a palavra DevMedia em negrito, adicionando a tag <b> ao redor desta palavra:
// var stringExemplo = "Aprendendo JavaScript na DevMedia!";
// var posicaoInicial = stringExemplo.indexOf("DevMedia");
// var posicaoFinal = posicaoInicial + "DevMedia".length;
// var htmlExemplo = "";
 
// for(caractere in stringExemplo) {
//     htmlExemplo += stringExemplo.charAt(caractere);
    
//     if(caractere == posicaoInicial - 1) {
//         htmlExemplo += "<b>";
//     }
    
//     if(caractere == posicaoFinal - 1) {
//         htmlExemplo += "</b>";
//     }
// }
// console.log(stringExemplo)

// //subString
// //Parameters: indexStart The index of the first character to include in the returned substring.
// //Parameters: indexEnd Optional. The index of the first character to exclude from the returned substring.

// var str = 'Mozilla';

// console.log(str.substring(1, 3));
// // expected output: "oz"

// console.log(str.substring(2));
// // expected output: "zilla"

/*
There's a subtle difference between the substring() and substr() methods, so you should be careful not to get them confused
The arguments of substring() represent the starting and ending indexes, 
while the arguments of substr() represent the starting index and the number of characters to include in the returned string.
*/


// var text = 'Mozilla';
// console.log(text.substring(2,5)); // => "zil"
// console.log(text.substr(2,3));    // => "zil"