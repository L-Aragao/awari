
//Array

let alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos)

alunos = 123; // como utilizamos let pode se rescrever a variavel com outro tipo de valor 
console.log(alunos)

console.log(typeof alunos); //Number
console.log(alunos instanceof Array); //verifica se é instancia de arrays

//               0       1        2          3      4
alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo 

console.log(typeof alunos);  //objeto
console.log(alunos instanceof Array);  // true

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);

alunos.push('Luiza'); // Adicona no fim
// alunos[alunos.length] = 'Luiza';  // Adiciona no fim
alunos.push('Eduardo');
console.log(alunos);

alunos.pop() //remove o ultimo
alunos.unshift('Eduardo'); // Adiciona no começo
console.log(alunos);

delete alunos[2] // remove o valor, mas o espaço continua reservado (empty item)
console.log(alunos);


console.log(alunos[50]); // valor fora do index do array retorna undefined - não retorna exception

console.log(alunos.slice(0, 2)); // mesmo metodo utilizado em objetos strings

// alunos[2] = 'João'; // Altera
// alunos[5] = 'Awari'; // Adicionando caso o index não exista

//Loop e iteracao

console.log("\nfor padrão: \n")
for( let i = 0; i < alunos.length; i++){
    console.log(alunos[i])
} 

console.log("\nfor IN: \n")
for( numberAluno in alunos){
    // console.log(numberAluno) //Pega o index na iteracao correspondente
    console.log(alunos[numberAluno])
}

console.log("\nfor OF: \n")
for (const nome of alunos) {
    console.log(nome);
}