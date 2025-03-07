let esp = ["coxinha", "Risoles", "Kibe", "Pastel"];
let valor = [5, 6, 5, 10];
let contador = 0;

while (contador < esp.length) {
    let c2 = contador + 1;
    console.log(c2 + " - " + esp[contador] + " R$ " + valor[contador]);
    contador = contador + 1;
}
