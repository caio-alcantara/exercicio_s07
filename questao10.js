function multiplicarMatrizes(matrizA, matrizB) {
    let linhasA = matrizA.length;
    let colunasA = matrizA[0].length;
    let linhasB = matrizB.length;
    let colunasB = matrizB[0].length;
    
    // Verifica se as matrizes podem ser multiplicadas
    if (colunasA !== linhasB) {
        console.log("Não é possível multiplicar as matrizes. O número de colunas da matriz A não é igual ao número de linhas da matriz B.");
        return;
    }
    
    // Inicializa a matriz resultante com zeros
    let resultado = new Array(linhasA);
    for (let i = 0; i < linhasA; i++) {
        resultado[i] = new Array(colunasB).fill(0);
    }
    
    // Multiplica as matrizes
    for (let i = 0; i < linhasA; i++) {
        for (let j = 0; j < colunasB; j++) {
            for (let k = 0; k < colunasA; k++) {
                resultado[i][j] += matrizA[i][k] * matrizB[k][j];
            }
        }
    }
    
    return resultado;
}

// Exemplo de uso:
let matrizA = [[1, 2, 3], [4, 5, 6]];
let matrizB = [[7, 8], [9, 10], [11, 12]];

let resultado = multiplicarMatrizes(matrizA, matrizB);
console.log("Resultado da multiplicação:");
console.log(resultado);