/**Crie uma função que após 5 segundos, dobre o resultado do número passado como parâmetro 
 * e Imprima o valor no console
 * utilize Async/ Await
*/





//Modelo Async/ Await

async function calculaDobro(x) {
    const p1 = await new Promise((resolve, reject) => setTimeout(()=> resolve(x), 5 * 1000))
    return p1
}

calculaDobro(5).then(result => console.log(parseInt(result)*2))

//IIFE
// (async ()=>{
//     let p1 = await calculaDobro(5)
//     let p2 = await calculaDobro(p1)
//     console.log(p1)
//     console.log(p2)
// })()