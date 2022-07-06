function verificarIdades() {
    let idades = document.getElementById("txtIdades").value;
    idades = idades.split(" ");
    let maior = 0;
    let menor = 0;
    for (i = 0; i < idades.length; i++) {
        if (parseInt(idades[i]) >= 18) {
            maior++;
        } else {
            menor++;
        }
    }
    document.write("Maiores: " + maior + " - Menores: " + menor);
}
