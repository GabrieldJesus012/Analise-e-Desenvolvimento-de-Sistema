class MinhaClasse{
    constructor(valor){
        this.valor=valor;
    }

    operacaoAssicrona(){
        return new Promise((resolve,reject)=>{
            const resultado= this.valor *2;

            if(resultado>=0){
                resolve(resultado)
            }else{
                reject("O resultado é negativo")
            }
        })
    }
}

const minhaClasse = new MinhaClasse(5);
minhaClasse.operacaoAssicrona()
.then((resultado)=>{
    console.log("O resultado é: ", resultado)
})
.catch((erro)=>{
    console.log("Ocorreu um erro: ", erro)
})

