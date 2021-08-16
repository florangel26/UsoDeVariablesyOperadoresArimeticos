// numero 2

// Se piden los números al usuario a través de un prompt y se utiliza parseInt para convertirlo a numero

let numUno = prompt("Ingresa un número mayor a cero");
numUno = parseInt(numUno);
let numDos = prompt("Ingresa otro número mayor a cero");
numDos = parseInt(numDos);


let Suma = numUno + numDos;
let Resta = numUno - numDos;
let Multiplicacion = numUno * numDos;
let Division = numUno / numDos;
let Modulo = numUno % numDos;



console.log(`El resultado de la Suma es: ${Suma}`);
console.log(`El resultado de la Resta es: ${Resta}`);
console.log(`El resultado de la Multiplicación es: ${Multiplicacion}`);
console.log(`El resultado de la División es: ${Division}`);
console.log(`El resultado del resto es: ${Modulo}`);


// numero 3

// Pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit

let celsius = prompt("Ingresa el valor de la temperatura en grados celsius que quieres transformar");
celsius = parseInt(celsius);


const kelvin = 273.15;
const fahrenheit = 32;



let resultCelciusToKelvin = celsius + kelvin;
let resultCelciusToFahrenheit = (celsius * 9/5) + fahrenheit;


console.log(`El resultado a grados Kelvin es: ${resultCelciusToKelvin}`);
console.log(`El resultado a grados Fahrenheit es: ${resultCelciusToFahrenheit}`);

// numero 4

// pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días.

let day = prompt( "Ingresa el número de días" );
day = parseInt(day);


const oneYear = 365;
const oneWeek = 7;
const oneDay = 1;


let resultYear = (day / oneYear);
let resultWeek = (day % oneYear / oneWeek);
let resultDays = ((resultWeek * oneWeek / oneYear) * oneWeek);


console.log(`${day} días equivalen a: ${Math.floor(resultYear)} año/s, ${Math.floor(resultWeek)} semana/s y ${Math.floor(resultDays)} día/s.`)

// numero 5

// Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden: La suma de todos los números y  El promedio de los 5 números ingresados.

let numOne = prompt("Ingresa el primer número");
numOne = parseInt(numOne);
let numTwo = prompt("Ingresa el segundo número");
numTwo = parseInt(numTwo);
let numThree = prompt("Ingresa el tercer número");
numThree = parseInt(numThree);
let numFour = prompt("Ingresa el cuarto número");
numFour = parseInt(numFour);
let numFive = prompt("Ingresa el quinto número");
numFive = parseInt(numFive);



let sumNumbers = numOne + numTwo + numThree + numFour + numFive;


console.log(`La suma de todos los números es ${sumNumbers}`);
console.log(`El promedio de los números es ${sumNumbers / 5}`);

