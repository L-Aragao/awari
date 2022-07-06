//callback

// const fs = require('fs')

// const pathFile1 = '/Users/luiz.junior/Documents/Workspace/Awari/Aula3/arquivos/arquivo1.txt'
// const pathFile2 = '/Users/luiz.junior/Documents/Workspace/Awari/Aula3/arquivos/arquivo2.txt'
// const pathFile3 = '/Users/luiz.junior/Documents/Workspace/Awari/Aula3/arquivos/arquivo3.txt'


//http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


// function retorno(erro, conteudo){
//     console.log(erro || String(conteudo))
// }

// fs.readFile(pathFile1, retorno)

// console.log(1)

// console.log(2)

// console.log(3)


// fs.readFile(pathFile1, (err, contents) => {
//     console.log(err || String(contents))
// } )

// hadoken ou calback hell
// fs.readFile(pathFile1, (err, contents) => {
//     fs.readFile(pathFile2, (err2, contents2) => {
//         fs.readFile(pathFile3, (err3, contents3) => {
//             console.log(err, String(contents))
//             console.log(err2, String(contents2))
//             console.log(err3, String(contents3))
//         })
//     })
// })

// fs.readFile(pathFile3, (err, contents) => {
//     console.log(err, String(contents))
// })


function imprimir(x, y, z ){
    setTimeout(()=>{
        console.log(x)
        setTimeout(()=>{
            console.log(y)
            setTimeout(()=>{
                console.log(z)
            }, 0)
        }, 0)
    }, 2 * 1000)
}

// function imprimirCopilado(x, y, z){
//     setTimeout(() => console.log(x), 2 * 1000)
//     setTimeout(() => console.log(y), 1000)
//     setTimeout(() => console.log(z), 2 * 1000)
// }


// const  imprimi = (x, y, z) => setTimeout (() => {
//     console.log(x)
//     setTimeout (() => {
//         console.log(y)
//         setTimeout (() => {
//             console.log(z)
//         }, 2*1000, z) 
//     }, 2*1000, y) 
// }, 2*1000, x) 

imprimir(1, 2, 3)
// imprimirCopilado (4, 5, 6)

