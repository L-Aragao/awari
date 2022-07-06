"use strict";
// Objeto - no paradigma de orientao a objeto: DTO - data transfer object
let employee1 = { codFunc: 9999, empCode: 1, name: "Luiz", salary: 2000 };
let employee2 = { codFunc: 9999, empCode: 2, name: "Mario", salary: 200 };
let employee3 = { codFunc: 9999, empCode: 3, name: "Luigi" };
let employee4 = { codFunc: 9999, empCode: 3, name: "Luigi" };
console.log(employee1);
console.log(employee2);
console.log(employee3);
function addKeyValue(key, value) {
    console.log(`addKeyValue: key = ${key}, value = ${value}`);
}
function updateKeyValue(key, value) {
    console.log(`updateKeyValue: key = ${key}, value = ${value}`);
}
let testeAdKV = addKeyValue;
testeAdKV(1, "Luiz");
let testeUpKV = addKeyValue;
testeUpKV(2, "Bowser");
let testArr = [1, 2, 4, 10];
// let testArr2 = [1, 2 , "teste"]
console.log(testArr[3]);
let strArr = {};
strArr["chave1"] = "Javascript";
strArr["chave2"] = "Typescript";
console.log(strArr);
console.log(strArr["chave1"]);
console.log(strArr["chave2"]);
let emp1 = {
    name: "Luiz",
    age: 32,
    address: "Awari curso backend",
    gender: "M"
};
console.log(emp1);
class Empresa {
    constructor(code, nome) {
        this.empCode = code;
        this.razao = nome;
    }
    getQtdFunc(code) {
        switch (code) {
            case 10:
                return 200;
            case 20:
                return 1000;
            case 30:
                return 10000;
            default:
                return 0;
        }
    }
}
