var numeros= [1,2,3,4,5,6,7,8,9,10];
var resultado = numeros.filter(elemento=>elemento%2==0);
console.log(resultado);

var numerosFiltrados= numeros.filter(
    function(valor){
        return valor>5
    }
    
);
console.log(numerosFiltrados);

function buscarValores(valor){
    return valor<5;
}
var numerosEncontrados =numeros.filter(buscarValores);
console.log (numerosEncontrados);

var funcionario= [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var pessoalistagem = funcionario.filter(
    function(valor){
        return valor.nome.length<5;
    })
console.log(pessoalistagem);