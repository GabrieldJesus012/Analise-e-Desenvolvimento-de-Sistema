function criarFuncionario (nome,sobrenome,altura,peso){

    return{
        nome,
        sobrenome,
        altura: altura,
        peso: peso,
        calculoIMc(){
            const indice = this.peso/(this.altura ** 2).toFixed(2);
            if(indice<18.5){
                console.log ("Abaixo do Peso")
            }else if(indice>=18.5 && indice<24.9){
                console.log("Peso Normal")
            }else if(indice>= 25 && indice<29.9){
                console.log("Acima do peso")
            }else if(indice>=30 && indice<34.9){
                console.log("Obesidade 1")
            }else if(indice>=35 && indice<39.9){
                console.log("Obesidade 2")
            }else if(indice>=40){
                console.log("Obesidade 3")
            }
        }
    }
}

const f1= criarFuncionario("Gabriel","De Jesus",1.67,63);
f1.calculoIMc();
