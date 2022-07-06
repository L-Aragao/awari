function calcularQuadrado() {
    let numero1 = document.getElementById("txtNumero1").value;
    let numero2 = document.getElementById("txtNumero2").value;
    let numero3 = document.getElementById("txtNumero3").value;
    let numero4 = document.getElementById("txtNumero4").value;
    let numero5 = document.getElementById("txtNumero5").value;
    
    const numeros = [];
    numeros.push( numero1, numero2, numero3, numero4, numero5 )

    // for (i = 0; i < numeros.length; i++) {
    //     quadrado = parseInt(numeros[i]) * parseInt(numeros[i]);
    //     document.write("O quadrado de " + numeros[i] + " é " + quadrado + "<br>");
    // }

    for(numero of numeros){
        quadrado = parseInt(numero) ** 2
        document.write("O quadrado do " + numero + " é " + quadrado + "<br>");
    }
}