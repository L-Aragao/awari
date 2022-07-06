//Escopo é onde uma variavel pode ser acessada/ usada
//basicamente temos 2 escopos: Funcao e Global

if (true) {
    var result = 10;
}
console.log(result); // logs 5


if (true) {
    //IIFE
    (function () {
        var result = 5;
    })();
    console.log(result); // ReferenceError
}


function logResult() {
    var result = 5;
}
if (true) {
    logResult();
}
console.log(result);  // ReferenceError


//Resolvendo referencias de escopo em cadeia
// JavaScript segue o principio de "Closer is better"
// se a function outer() declara o objeto x, e ela possui a function inner() que tambem declara um objeto x:
// outer() tera a referencia do x de outer 
// inner() tera a referencia do x de inner

function outer() {
    var x = 'OUTER';
    function inner() {
        var x = 'INNER';
        return x;
    }
    return { x: x, y: inner() };
}
console.log(outer())


//Let  traz escopo de funcao
// if (false) {
//     var x = 5;
//     let y = 6;
//     const z = 7;
// }
// console.log(x); // printa undefined
// console.log(y); // error (is not defined) - y e escopo bloqueado por conta do let
// console.log(z); // error (is not defined) - z e escopo bloqueado por conta do const


//Closures
// Closure e um tipo especial de estrutura, ela combina a funcao com o seu contexto 

function outer2(x) {
    function inner2(y) {
        return x + " " + y;
    }
    return inner2;
}

const f1 = outer2(5);
console.log(f1(7)); // saida 5 7

const f2 = outer2("Luiz");
console.log(f2("De Aragao"));  // saida Luiz De Aragao

// Closures podem ser usadas para omitir/esconder propriedades e dados (encapsulamento)
// Traz o conceito de privado

// no caso abaixo students e teachers não acessiveis
//IIFE
const school = (function() {
    let students = [];
    let teachers = [];
    function addStudent(name, grade) {}
    function addTeacher(name, speciality) {}
    function getTeachers(speciality) {}
    function getStudents(grade) {}
    return {
        addStudent: addStudent,
        addTeacher: addTeacher,
        getTeachers: getTeachers,
        getStudents: getStudents
    };
})();