// Funções são snippet (pequeno bloco/ trecho de codigo)
// Pode ser invocado pelo seu identificador (nome)
// Podem receber parametros
// tem 2 tipos implicitos de parametros: arguments(UM objeto array) e this (informacoes do contexto da funcao)
// Podem retornar qualquer tipo de valor

//Function Object
//Funcoes em JS são objetos de primeira classe (podemos tratar como valores e
//e amarzenar em variaveis e constantes)
//Logo podem ser passados para outras funcoes
//Possuem suas proprias propriedades (length, name, apply, call...)

//Declaraçao de funcao
function printMsg(msg) {
    console.log(`Mensagem: ${msg}`);
}

//Expressao de funcoes
const printMsg1 = function (msg) {
    console.log(`Mensagem: ${msg}`);
}

const printMsg2 = function printMsg(msg) {
    console.log("Mensagem: " + msg);
}
const printMsg3 = (msg) => console.log(`Mensagem: ${msg}`);

printMsg(0)
printMsg1(1)
printMsg2(2)
printMsg3(3)

//Function Constructors - Construtores não muito utilizados
//new Function([optional arguments], body);
//Ex:
const printMsg4 = new Function("msg", "console.log(msg);")
printMsg4(4)

// Function Methods
// funcoes tem seus propris metodos

function externa(){
    function interna(){
        console.log("Funcao interna rodando")
    }
    interna();
}
externa();
interna(); // retorna erro não foi declarado

//toString() - Retorna o codigo da funcao como string
//ex:
console.log(printMsg.toString())

console.log(externa.toString()) //=> 
// function externa(){
//     function interna(){
//         console.log("Funcao interna rodando")
//     }
//     interna();
// }


//call(context, arg0, arg1, ...) O método call() é uma função capaz de alterar o valor this. 
//Por padrão, o primeiro parâmetro que recebe é o valor do this e o demais parâmetros são da função que invoca o método Call.
//ex:

const article = {
    title: 'Descomplica Call',
    language: 'JS'
}

const print = function(){console.log(`${this.title} em ${this.language}.`)}
print() //teremos undefined
print.call(article)

//apply(context, [arg0, arg1, …]) O Apply funciona exatamente como o método Call, porém seu segundo parâmetro recebe um Array dos parâmetros da função, 
//enquanto o primeiro parâmetro continua recebendo o valor que será atribuído ao this

//ex com os metodos max e min do modulo Math:
//uso padrao: max = Math.max(n1, n2, n3);

//com array usamos o apply:
const numbers = [2, 1, 3, 45, 1, 2, 3, 111];
max = Math.max.apply(null, numbers);
min = Math.min.apply(null, numbers);

console.log(max)
console.log(min)

