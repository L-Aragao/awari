function verificarDados() {
    let altura = document.getElementById("txtAltura").value;
    let sexo = document.getElementById("txtSexo").value;

    altura = altura.split(" ");
    sexo = sexo.split(" ");
    let masculino = 0;
    let feminino = 0;
    let maiorAltura = parseFloat(altura[0]);
    let sexoMaiorAltura = sexo[0];
    for (i = 0; i < sexo.length; i++) {
        if (sexo[i].toUpperCase() == "M") {
            masculino++;
        } else if (sexo[i].toUpperCase() == "F") {
            feminino++;
        }

        if (parseFloat(altura[i]) > maiorAltura) {
            maiorAltura = parseFloat(altura[i]);
            sexoMaiorAltura = sexo[i].toUpperCase();
        }
    }

    document.write("Masculino: " + masculino + " - Feminino: " + feminino + "<br>");
    document.write("A maior altura é " + maiorAltura + " e pertence ao sexo " + sexoMaiorAltura);
}