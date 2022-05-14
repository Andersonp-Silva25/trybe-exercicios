//Variavel receberá o nome de uma peça de xadrez e deve retornar o que ela faz

let peca = 'RAINHA';

//Independente de como for digitado o sistema sempre vai converter tudo para minusculo
let resultado = peca.toLowerCase();

switch (resultado){
    case 'peão':
        console.log(peca,"-> Apenas uma casa para frente, exceto no primeiro movimento pois pode andar duas casas para frente");
        break;
    case 'cavalo':
        console.log(peca,"-> Sempre se movimenta em forma de L");
        break;
    case 'bispo':
        console.log(peca,"-> Sempre se movimenta em diagonal");
        break;
    case 'torre':
        console.log(peca,"-> Sempre se movimenta em linha reta tanto na vertical quanto na horizontal, quantas casas quiser");
        break;
    case 'rainha':
        console.log(peca,"-> Se movimenta para qualquer lado que quiser, quantas casas desejar");
        break;
    case 'rei':
        console.log(peca,"-> Se movimenta para qualquer lado, porém apenas uma casa");
        break;
    default:
        console.log(peca,"-> Peça passada foi invalida");
}
