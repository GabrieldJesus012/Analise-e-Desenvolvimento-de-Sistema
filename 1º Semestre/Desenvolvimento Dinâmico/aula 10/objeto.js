
// forma de criar objetos
const pessoa = {
    nome: "Gabriel",
    sobrenome: "de Jesus"
}
console.log(pessoa["nome"] + pessoa["sobrenome"])

const funcionario = new Object();
funcionario.nome = "Paula"
funcionario.sobrenome = "Oliveira"

console.log(funcionario.nome)

function criarPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const p1=criarPessoa("Arthur", "Silva")
const p2= criarPessoa("João", "Antonio")
console.log (p1.nomeCompleto())
console.log (p2.sobrenome)



