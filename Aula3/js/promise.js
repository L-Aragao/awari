//promise

const fs = require('fs')

const pathFile1 = '/Users/luiz.junior/Documents/Workspace/Awari/Aula3/arquivos/arquivo1.txt'
const pathFile2 = '/Users/luiz.junior/Documents/Workspace/Awari/Aula3/arquivos/arquivo2.txt'
const pathFile3 = '/Users/luiz.junior/Documents/Workspace/Awari/Aula3/arquivos/arquivo3.txt'


const leArquivo = arquivo => new Promise((resolve,reject) => {
    fs.readFile(arquivo, (err, contents) => {
        if(err) { 
            reject(err)
        } else {
            resolve(contents)
        }
    })
})


leArquivo(pathFile1)
    .then(result => {
        console.log(String(result))
        return leArquivo(pathFile2)
    })
    .then(contents => {console.log(String(contents))
        console.log(String(contents))
        return leArquivo(pathFile3)
    })
    .then(contents => console.log(String(contents)))
    // .catch( erro => console.log(erro))

console.log(execucao)




