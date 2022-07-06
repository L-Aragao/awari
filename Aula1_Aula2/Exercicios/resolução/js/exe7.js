function verificarData(){
    let data = document.getElementById("txtData").value;
    data = data.split(/[,./-\s]/);
    document.write("Dia: "+data[0]+"<br>");
    document.write("Mês: "+data[1]+"<br>");
    document.write("Ano: "+data[2]+"<br>");
}