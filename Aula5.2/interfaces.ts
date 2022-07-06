// Objeto - no paradigma de orientao a objeto: DTO - data transfer object

interface IEmployee{
    readonly codFunc: number; //propriedade somente para leitura
    empCode: number;
    name: string;
    salary?: number; //? torno a propriedade opcional
}

let employee1: IEmployee = {codFunc: 9999, empCode: 1, name: "Luiz", salary: 2000};

let employee2: IEmployee = {codFunc: 9999, empCode: 2, name: "Mario", salary: 200 };

let employee3: IEmployee = {codFunc: 9999, empCode: 3, name: "Luigi" };

let employee4: IEmployee = {codFunc: 9999, empCode: 3, name: "Luigi" };

console.log(employee1)
console.log(employee2)
console.log(employee3)

// Como function type

interface IKeyValueProcessor{
    (key: number, value: string ) : void;
}


function addKeyValue(key: number, value: string): void {
    console.log(`addKeyValue: key = ${key}, value = ${value}`)
}

function updateKeyValue(key: number, value: string): void {
    console.log(`updateKeyValue: key = ${key}, value = ${value}`)
}

let testeAdKV: IKeyValueProcessor = addKeyValue
testeAdKV(1, "Luiz");

let testeUpKV: IKeyValueProcessor = addKeyValue
testeUpKV(2, "Bowser");

// Interface para tipos de Array

interface IArrayNumberList{
    [index:number]: number
}

let testArr: IArrayNumberList = [1, 2, 4, 10]
// let testArr2 = [1, 2 , "teste"]
console.log(testArr[3])


interface IArrayStringList{
    [index:string]: string
}


let strArr: IArrayStringList = {};
strArr["chave1"] = "Javascript"
strArr["chave2"] = "Typescript"
console.log(strArr)
console.log(strArr["chave1"])
console.log(strArr["chave2"])


//Extending - herença de interface

interface IPerson{
    name: string;
    age: number;
    gender: String; 
}

interface IEmployee2 extends IPerson {
    address: string
}

let emp1: IEmployee2 = {
    name: "Luiz", 
    age: 32, 
    address: "Awari curso backend",
    gender: "M"
}
console.log(emp1)

//Implementando uma classe com interface como modelo

interface IEmpresa{
    empCode: number;
    razao: string;
    getQtdFunc: (empCode: number) => number;
}


class Empresa implements IEmpresa {
    empCode: number;
    razao: string;

    constructor(code: number, nome: string){
        this.empCode = code;
        this.razao = nome
    }

    getQtdFunc(code: number ): number{
        switch(code){
            case 10:
                return 200;
            case 20:
                return 1000
            case 30:
                return 10000;
            default:
                return 0
        }
    }    
}