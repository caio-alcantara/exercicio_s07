botao = document.getElementById("start");

botao.onclick = function() {
    let idade = prompt("Digite a sua idade: ");
    
    if (idade < 16) {
        alert("Você não pode votar.");
    } else if (idade >= 16 && idade < 18) {
        alert("Seu voto é opcional.");
    } else {
        alert("Seu voto é obrigatório.");
    }
}
