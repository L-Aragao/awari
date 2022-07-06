function calcularMedia() {
    let notas = document.getElementById("txtNumeros").value;
    notas = notas.split(" ");
    let totalNotas = 0
    // for (i = 0; i < notas.length; i++) {
    //     totalNotas += parseInt(notas[i])
    //     document.write(`Nota ${i + 1} é ${notas[i]}<br>`);
    // }
    for(indexNota in notas){
        totalNotas += parseInt(notas[indexNota])
        document.write(`Nota ${(parseInt(indexNota) + 1)} é ${notas[indexNota]}<br>`);
    }

    let media = totalNotas / notas.length
    document.write(`A media de notas é:  ${media}"<br>`);
}