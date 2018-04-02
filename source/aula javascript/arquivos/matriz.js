var matriz = [
    [8, 22, 13, 7],
    [5, 13, 10, 9],
    [9, 1, 6, 2],
    [45, 88, 22, 3]
];

function mostraMatriz() {
    for (let i = 0; i < matriz.length; i++) {
        const linha = matriz[i];
        var valores = "|";
        for (let j = 0; j < linha.length; j++) {
            const coluna = linha[j];
            if (coluna < 10)
                valores += "0" + coluna;
            else
                valores += coluna;
            valores += "|";
        }
        console.log(valores);
    }
}

function somaDiagonalPrincipal() {
    var total = 0;
    for (let i = 0; i < matriz.length; i++) {
        const linha = matriz[i];
        for (let j = 0; j < linha.length; j++) {
            const coluna = linha[j];
            if (i == j) {
                total += coluna;
                break;
            }
        }
    }
    console.log("A soma da diagonal principal é: " + total);
}

function somaDiagonalSecundaria() {
    // implementar esse método
}