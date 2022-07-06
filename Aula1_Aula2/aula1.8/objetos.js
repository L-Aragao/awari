//Objetos

// const nome1 = "Luiz"
// const sobreNome1 = "De Aragão"
// const idade1 = 32

// const nome2 = "Maria"
// const sobreNome2 = "Bonita"
// const idade2 = 55
// console.log(`{ nome: '${nome1}', sobrenome: '${sobreNome1}', idade: '${idade1}' }`)
// console.log(`{ nome: '${nome2}', sobrenome: '${sobreNome2}', idade: '${idade2}' }`)

//criando um objeto
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'De Aragão',
    idade: 32
};

// console.log(pessoa1)
// Acessar propriedades de um objeto usar o operador (.)
// console.log(pessoa1.nome)
// console.log(pessoa1.sobrenome)
// console.log(pessoa1.idade)


// Factory

// function fabricaPessoas (nome, sobrenome, idade) { 
//     return {
//         nome, 
//         sobrenome, 
//         idade
//     }    
// }

// const pessoas = []

// for(let i = 0; i < 3; i++){
//     let nome = prompt("Insira o nome ")
//     let sobrenome = prompt()
//     let idade = prompt()
//     pessos.push(fabricaPessoas (nome, sobrenome, idade))
// }

// const fabricaPessoas = function (nome, sobrenome, idade) { 
//     return {
//         nome, 
//         sobrenome, 
//         idade
//     }    
// } 

const fabricaPessoas = function (nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

        fala() {
            console.log(`Eu sou o ${this.nome} e a minha idade atual é ${this.idade}.`);
        },

        incrementaIdade() {
            this.idade++;
        }
    }
}

const pessoa2 = fabricaPessoas("Mario", "Bros", 30)
const pessoa3 = fabricaPessoas("Bowser", "Kopa", 50)
const pessoa4 = fabricaPessoas("Princess", "Peach", 40)
const pessoa5 = fabricaPessoas("Toad", "Bros", 50)

// console.log(pessoa1)
// console.log(pessoa2)
// console.log(pessoa3)
// console.log(pessoa4)
// console.log(pessoa5)

pessoa2.fala()
pessoa2.incrementaIdade()
pessoa2.fala()
pessoa2.incrementaIdade()
pessoa2.fala();
pessoa2.incrementaIdade();
pessoa2.fala();