
//calcular a média de todos os numeros de um array
var valores = [8,1,7,2,9];

console.log("Array Invertido:" + valores.reverse())

var soma = 0;

for (var pos =0; pos<valores.length; pos++){
    soma += valores [pos];
}

var media= soma/valores.length

console.log(media);

var valores = [8,1,7,2,9];

console.log(valores);

console.log("Array Invertido:" + valores.reverse());

var arr1 = [1,2,3,4,5,6];

console.log(arr1.join('|'));

var retirado = arr1.shift();

console.log(retirado);

console.log(arr1);

console.log("Posição do Numero 3: " + arr1.indexOf(4));

arr1.push(7);

console.log(arr1);

arr1.pop();

console.log(arr1);

//escrever um array com numero positivo e negativo
//criar outro array que só tenha numero positivo (dica: for e if)

var ar= [-5,10,19,20,-3,09];

var numerosPositivos = [];

for (var i = 0; i < ar.length; i++) {
    if (ar[i] > 0) {
        numerosPositivos.push(ar[i]);
    }
}

console.log("Array com números positivos:", numerosPositivos);
