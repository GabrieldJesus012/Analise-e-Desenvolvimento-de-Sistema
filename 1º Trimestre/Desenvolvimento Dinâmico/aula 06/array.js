var arr2 =[1,2,3,4,5,6,7];

arr2.splice(1,1);

console.log(arr2);

var nomes= ["Maria", "João", "Lucas", "Pedro"];
nomes.splice(1,2,"Luiz","Ronaldo");
console.log(nomes);

var pais=["Brasil","Argentina", "Colombia"];
pais.unshift("Uruguai");
console.log(pais);

// array com 5 nomes, acrescentar o nome da monica e retirar o ultimo elemento do array, depois encontrar o nome do gabriel e trocar o lucas por gustavo

var nomes2= ["lucas","Adalberto","Ana", "Gabriel","Aurora"]
nomes2.unshift("Monica");
nomes2.splice(5,1)
console.log(nomes2)
nomes2.slice("Gabriel")
