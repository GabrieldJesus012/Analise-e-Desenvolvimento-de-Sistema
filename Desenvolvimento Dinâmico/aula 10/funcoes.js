function multiplicar (x,y){
    return x*y
}

var a= multiplicar(4,2);
console.log(a); //resposta 8

function somaValores (a,b = 2, c= 6){
    var total= a + b + c;
    return total;
}
// eu defini um valor para B dentro da função, contudo eu posso alterar (só definir um valor para ele e ele muda)
var f= somaValores (8)
console.log(f); //resposta 16

var infocal = function(a,b,c){
    return a+b+c
}
console.log(infocal(2,5,7));// resultado 14

const soma = (num1, num2)=>{
    return num1 + num2
}
console.log (soma(3,6)) //resultado 9

const numeros = [1,2,3,4,5];
const valores = numeros.map((num)=>num*num)
console.log (valores);  // ele faz 1*1, 2*2, 3*3... 

var listaProdutos = ["geladeira","fogão","air Fryer"];
var listaEmMaiusc = listaProdutos.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula (elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1) 
}
//charAt (0) pega a prim. letra do nome. O slice é para pegar apartir da 1 posicao em diante (retornar)
console.log (listaEmMaiusc); //retornar Geladeira, Fogão...

