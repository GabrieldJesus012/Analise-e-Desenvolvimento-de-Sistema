var numeros= [1,2,3,4,5,6,7,8,9,10];
var numx2 = numeros.map(function(elemento){
    return elemento*2;
})

console.log(numx2);

var funcionario= [
    {nome: "Luiz", idade: 62},
    {nome: "Davi", idade: 22},
    {nome: "Arthur", idade: 18},
    {nome: "Lucas", idade: 40},
]

var nomes = funcionario.map(pessoa=>pessoa.nome);
console.log(nomes);
