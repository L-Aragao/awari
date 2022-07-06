/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade
=== igualdade estrita (valor e tipo)
!= dirença
!== diferente estrito (valor e tipo)
*/

// console.log(10 > 9)
// console.log(10 >= 10)
// console.log(9 < 9)
// console.log(8 <= 9)

// console.log( "10" == 10)
// console.log( "10" === 10)

// console.log( "10" != 10)
// console.log( "10" !== 10)

/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/


const usuario = 'Luiz'; 
const senha = '123456';

// //                      True                  False
// const vaiLogarOr = (usuario === 'Luiz' || senha === '12345');

// console.log(vaiLogarOr);
// console.log(!vaiLogarOr);
// console.log(!!vaiLogarOr);


// //                      True                  False
const vaiLogarAnd = (usuario === 'Luiz' && senha === '12345');

console.log(vaiLogarAnd);
console.log(!vaiLogarAnd);
console.log(!!vaiLogarAnd);

//Estudar Falsy values