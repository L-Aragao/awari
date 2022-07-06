function exibirNomes() {
    let nomes = document.getElementById("txtNomes").value;
    nomes = nomes.split(" ");

    for (i = nomes.length - 1; i >= 0; i--) {
        document.write(nomes[i] + "<br>");
    }
}