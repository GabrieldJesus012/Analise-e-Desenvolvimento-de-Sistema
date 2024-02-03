var nome= "Gabriel ";
var x = nome.length;  // saber o tamanho do nome
console.log(x);

resultado = x> 15 ? "obrigado": "Por favor preencha seu nome completo";
console.log(resultado);

var alto = nome.toLocaleUpperCase(); //deixar nome ALTO
console.log (alto);

var jogo = "Barcelona vs Real melhor time";
var posicao = jogo.indexOf("Real"); // saber a posição do nome
console.log (posicao);

var novaString = jogo.substring (13,18); //criar um substring
console.log (novaString);

var cortado = jogo.slice(0,9);
console.log(cortado);

var val= jogo.includes ("Real"); // procurar se existe a palavra na var *responde true or false.
console.log(val);

var str1 = "Hello";
var str2 = "Word";
var str3 = str1.concat(str2); //juntar
console.log (str3);

var frase = "     olá você esta apredendo JS   ";
console.log(frase.trim()); //tira espaço

var num = "1,2,3,4,5,6,7,8";
var arr= num.split(","); //cria um elemento aonde encontrar ","
console.log(arr);

var frase= "Olá mundo";
if(frase.startsWith("Olá")){
    let sub = frase.substring (4,);
    let novafrase = sub.replace ("mundo","pessoal")//mudar mundo para pessoal
    let novafraseMaiusc= novafrase.toUpperCase();
    console.log (novafraseMaiusc);
}

