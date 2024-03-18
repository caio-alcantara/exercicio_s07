class FormaGeometrica {
    constructor(cor) {
        this.cor = cor;
    }

    calculaArea() {
        return undefined;
    }
}

class Quadrado extends FormaGeometrica {
    constructor(cor, lado) {
        super(cor);
        this.lado = lado;
    }

    calculaArea() {
        return this.lado * this.lado;
    }
}

class Circulo extends FormaGeometrica {
    constructor(cor, raio) {
        super(cor);
        this.raio = raio;
    }

    calculaArea() {
        return Math.round(Math.PI * this.raio * this.raio);
    }
}

let quadrado = new Quadrado('vermelho', 5);
console.log(quadrado.calculaArea()); // 25
let circulo = new Circulo('azul', 3);
console.log(circulo.calculaArea()); // 28.274333882308138