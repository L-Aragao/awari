
//Constante e variaveis
const minhaConstante = 10.0

let minhaVariavel = 10000

var minhaVariavelAntiga = 'modo antigo'
var minhaVariavelAntiga = 'modo antigo'

minhaVariavelGlobal = 'Cuidado sera acessada e modificada de qualquer lugar'


//diferença entre alguns comandos do browser vs comandos no backend
/*
    console.
    alert
    confirm
    prompt
*/

//tipo de variaveis/ constantes referencias
console.log(typeof(minhaConstante))
console.log(typeof(minhaVariavel))
console.log(typeof(minhaVariavelAntiga))
console.log(typeof(minhaVariavelGlobal))


//IEEE 754-2008
let num1 = 0.7; // number
let num2 = 0.1; // number


// let num3 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

let num3 = (num1 + num2).toFixed(2) * 10
// console.log(num3.toFixed(2))
num1 = Number(num1.toFixed(2));

// console.log(num1.toFixed(2));
console.log(Number.isInteger(num3));


let num4 = Math.floor(1.47);
let num5 = Math.ceil(1.47);

console.log(num4);
console.log(num5);

//falta arredodamento para decimal


// let num2 = Math.round(num1);
// console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));
// console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));
// const aleatorio = Math.round(Math.random() * (10 - 5) + 5);

// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(num1.toString(2));
// console.log(num1.toFixed(2));
// console.log(Number.isInteger(num1));
// console.log(Number.isNaN(temp));
// let temp = num1 + '5';
// console.log(temp);
