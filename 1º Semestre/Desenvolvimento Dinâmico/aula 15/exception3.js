function checkpositivo(numeros){
    if(!Array.isArray(numeros)){
        throw new Error("O argumento deve ser de um array")
    }
    const allpositive = numeros.every((num)=> num>0);
    if(!allpositive){
        throw new Error("O array deve ter apenas numeros positivos")
    }
    return true;
}

try{
    const numbers= [1,2,3,4,5]
    const isPossitive = checkpositivo(numbers)
    console.log(isPossitive)
}catch(error){
    console.log("Ocorreu um erro: ", error.message)
}

