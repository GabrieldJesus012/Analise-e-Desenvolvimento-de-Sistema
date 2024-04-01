const minhaPromise = new Promise((resolve, reject) =>{
    const sucesso = true
    if(sucesso){
        resolve("Deu bom")
    }else{
        reject("Deu ruim")
    }
})

minhaPromise
.then(result => {
		console.log(`O resultado é ${result}`);
	})

.catch(error => {
		console.error(`Ocorreu um erro: ${error}`);
	});

    