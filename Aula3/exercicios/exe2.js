/**Crie uma função que após 5 segundos, dobre o resultado do número passado como parâmetro 
 * e Imprima o valor no console
 * utiliza Promise
*/

function calculaDobro(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x), 5 * 1000)
    })
}

calculaDobro(5)
    .then(result => {
        let resultado = parseInt(result) * 2 
        console.log(resultado)
        return resultado
    })
    .then(result => console.log(parseInt(result) * 2))











//Modelo promise


// function calculaDobro(x) {
//     return new Promise((resolve, reject) => setTimeout(() => {
//         resolve(x)
//     }, 5 * 1000));
// }

// const calculaDobro = x => new Promise((resolve, reject) => setTimeout(()=> resolve(x), 5 * 1000))


// calculaDobro(5).then(
//     (result) => {
//         console.log(parseInt(result)*2)
//     }
// )
