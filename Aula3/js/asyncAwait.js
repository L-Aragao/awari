//async/ await

const fs = require('fs')

const pathFile1 = '/Users/luiz.junior/Documents/Workspace/Awari/Aula3/arquivos/arquivo1.txt'
const pathFile2 = '/Users/luiz.junior/Documents/Workspace/Awari/Aula3/arquivos/arquivo2.txt'
const pathFile3 = '/Users/luiz.junior/Documents/Workspace/Awari/Aula3/arquivos/arquivo3.txt'


const leArquivo = arquivo => new Promise((resolve, reject) => {
    fs.readFile(arquivo, (err, contents) => {
        if (err) {
            reject(err)
        } else {
            resolve(contents)
        }
    })
})

// Funcao usando async/ await puro tem o comportamento de promise encadeadas
console.time()
const funcAsync = async () => {
    const arquivo1 = await leArquivo(pathFile1)
    const arquivo2 = await leArquivo(pathFile2)
    const arquivo3 = await leArquivo(pathFile3)
    console.log(String(arquivo1))
    console.log(String(arquivo2))
    console.log(String(arquivo3))
}
funcAsync()
console.timeEnd()


/** async await é uma maneira mais elegante de se utilizar o promise
 * o async await e o promise tem por objetivo serializar nosso codigo
 * isto é, tratamos as funçoes como se estivessemos em um contexto sincrono
 * Async/ Await ainda é uma promise, entao podemos utilzar o  Promise.all 
 * O Promise.all otimiza o uso de tread em paralelo pelo lado do LIBUV
 * Assim temos mais performance - precisamos tomar cuidado caso o encademaneto e dependecia
 * 
 * 
 * No ex abaixo o result é o retorno (array) do Promise.all 
 * Poderiamos armazenar em uma variavel e fazer um iteraçao tbm:
 *
 *      results = await Promise.all([p1, p2, p3])
 *      for(result in result){ console.log(String(result))}
 * 
 */
console.time()
const funcAsyncPromiseAll = async () => {
    const p1 = leArquivo(pathFile1)
    const p2 = leArquivo(pathFile2)
    const p3 = leArquivo(pathFile3)
    await Promise.all([p1, p2, p3])
        .then(result => { 
            console.log(String(result[0]))
            console.log(String(result[1]))
            console.log(String(result[2]))
        })
}
funcAsyncPromiseAll()
console.timeEnd()
