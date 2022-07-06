/**Crie uma função que após 5 segundos, 
 * dobre o resultado do número passado como parâmetro 
 * e Imprima o valor no console
 * utiliza Callback
*/

// function calculaDobro(x){
//     setTimeout(() => console.log(x*2), 5 * 1000)
// }

// calculaDobro(20)


//Modelo callback

// function calculaDobro(x){
//     let valor = parseInt(x)
//     setTimeout(function(){console.log(valor*2)}, 5000)
// }

const  calculaDobro = x => setTimeout (() => {
    console.log(parseInt(x)*2)
}, 5000, x) 

calculaDobro(5)

