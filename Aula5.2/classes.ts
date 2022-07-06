class PrimeiraClasseTS{
    nome: string;
    idade: number;
    telefone: string;

    constructor(nome: string, idade: number, fone: string){
        this.nome = nome
        this.idade = idade
        this.telefone = fone
        console.log("construtor atuando")
        this.getSaudacao()
    }

    getSaudacao(): number{
        console.log("Ola primeira classe!")
        return 1000
    }
}

let primeira: PrimeiraClasseTS = new PrimeiraClasseTS("Luiz", 32, "11 9000000000");

//criar classe sem constructor
class SegundaClasseTS{
    nome?: string;
    email?: string
}

let segundo = new SegundaClasseTS(); //criar objeto é igual ao javascript


// Herança

class Pessoa {
    nome: string;

    constructor(nome: string){
        this.nome = nome
    }

    mostraNome(){
        console.log(`O nome da pessoa e: ${this.nome}`)
    }
}

class Aluno extends Pessoa{
    numeroChamada: number;
    
    constructor(num: number, nome: string){
        super(nome)
        this.numeroChamada = num
    }

    mostraNome(): void {
        console.log(`O nome do aluno e: ${this.nome} e seu numero da chamada e ${this.numeroChamada}`)
    }


}

let pessoa = new Pessoa("Luiz")
let aluno = new Aluno( 32, "Luiz",)

pessoa.mostraNome()
aluno.mostraNome()

//classe abstrata != interface

interface ITeste{
    nome: string;
    imprimiPropriedade: (x: number, y: number) => void
}

abstract class ModeloParaHerdar{
    propriedade1: string

    constructor(prop: string){
        this.propriedade1 = prop
    }

    imprimiAlgo() { console.log("hello abstract") }

    abstract substituiPropriedade(prop: string): void;
}


class TerceiraClasse extends ModeloParaHerdar{
    substituiPropriedade(prop: string){
        this.propriedade1 = prop
        console.log(`Propriedade agora e: ${this.propriedade1}`)
    }
}

let terceiro = new TerceiraClasse("prop1")
console.log(terceiro.propriedade1)
terceiro.imprimiAlgo()
terceiro.substituiPropriedade("prop novo")


//PROXIMAS AULAS> MVC, Padroes de projeto, Express + MVC , PRINCIPIOS DE REST