// Factory

function fabricaPessoas (nome, sobrenome, idade) { 
    return {
        nome, 
        sobrenome, 
        idade
    }    
}

const pessoas = []

for(let i = 0; i < 3; i++){
    let nome = prompt()
    let sobrenome = prompt()
    let idade = prompt()
    pessoas.push(fabricaPessoas (nome, sobrenome, idade))
}