var numeroSecreto = parseInt(Math.random()*1001);
var contador = 0;

while (chute != numeroSecreto) {
    var chute = prompt('Digite um número entre 1 e 1000');

    if(chute == numeroSecreto){
        alert("Você acertou!");
    } else if(chute > numeroSecreto) {
        alert("Errou... o número secreto é menor!");
    } else if(chute < numeroSecreto){
        alert("Errou... o número secreto é maior!");
    }
    contador++;
}
alert("Você venceu em " + contador + " tentativas");