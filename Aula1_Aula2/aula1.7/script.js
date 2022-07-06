//funcoes

//Function declarations - Declaração de funções


// function nomeDaFuncao(){
//     console.log("primeira funcao!")
// }

// nomeDaFuncao()

// function primeiraFuncao(nome){
//     console.log(`${nome} Bem vindo a aula de funcoes`)
// }

// primeiraFuncao("Luiz")

//Exercicio

//defina uma função que recebe 2 argumentos e retorna a soma dos mesmos
function soma(x, y){
    let soma = x + y
    return soma
}
console.log(soma(2,3))

console.log(multiplicar(2,3))

//defina uma função que recebe 2 argumentos e retorna o produto dos mesmos
function multiplicar(x, y){
    let produto = x * y
    return produto
}

/**
 * Function declaration podem ser invocadas 
 * antes ou depois de serem definidas no código fonte, não faz diferença.
 * Isso é chamado de function hoisting 
 */



//Function expressions - Função Anonima

/**
 * Funções anônimas são funções sem nome.
 * Funções anônimas podem ser usadas como argumento para outras funções 
 */

// let sum = function(x, y) {
//     return x + y;
// }

// console.log(sum (2,3))
// console.log(sum (2,4))
// console.log(sum (2,7))
// console.log(sum (-2,10))

//Arrow Functions - Funções de seta

const sum = (x = 1, y = 1) => x + y

console.log(sum (2,3))
console.log(sum (2,4))
console.log(sum (2,7))
console.log(sum (-2,10))
console.log(sum())


// Funcao como paramentro

function raizQuadrada (n){
    return  n ** 0.5
}


// let numero = 9
// let resultado = raizQuadrada(9,function(){ 
//     console.log(`calculo raiz quadrada de ${numero}: `)
// }());
// console.log(resultado)

let teste = (numero) => raizQuadrada(function(){ 
    console.log(`calculo raiz quadrada ${numero}`)
    return numero
}());

console.log(teste(9))
console.log(teste(81))

//Closure?
