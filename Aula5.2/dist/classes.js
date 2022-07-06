"use strict";
class PrimeiraClasseTS {
    constructor(nome, idade, fone) {
        this.nome = nome;
        this.idade = idade;
        this.telefone = fone;
        console.log("construtor atuando");
        this.getSaudacao();
    }
    getSaudacao() {
        console.log("Ola primeira classe!");
        return 1000;
    }
}
let primeira = new PrimeiraClasseTS("Luiz", 32, "11 9000000000");
//criar classe sem constructor
class SegundaClasseTS {
}
let segundo = new SegundaClasseTS(); //criar objeto é igual ao javascript
// Herança
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    mostraNome() {
        console.log(`O nome da pessoa e: ${this.nome}`);
    }
}
class Aluno extends Pessoa {
    constructor(num, nome) {
        super(nome);
        this.numeroChamada = num;
    }
    mostraNome() {
        console.log(`O nome do aluno e: ${this.nome} e seu numero da chamada e ${this.numeroChamada}`);
    }
}
let pessoa = new Pessoa("Luiz");
let aluno = new Aluno(32, "Luiz");
pessoa.mostraNome();
aluno.mostraNome();
class ModeloParaHerdar {
    constructor(prop) {
        this.propriedade1 = prop;
    }
    imprimiAlgo() { console.log("hello abstract"); }
}
class TerceiraClasse extends ModeloParaHerdar {
    substituiPropriedade(prop) {
        this.propriedade1 = prop;
        console.log(`Propriedade agora e: ${this.propriedade1}`);
    }
}
let terceiro = new TerceiraClasse("prop1");
console.log(terceiro.propriedade1);
terceiro.imprimiAlgo();
terceiro.substituiPropriedade("prop novo");
