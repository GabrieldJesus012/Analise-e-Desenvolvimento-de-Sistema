let carrinho = [];
function start(){
    fetch('https://fakestoreapi.com/products?limit=4')
    .then(Response=>Response.json())
    .then(data=>{
        preencherCarrinho(data)
    })
    .catch(error=>{
        console.log("Ocorreu um erro ", erro)
    })
}

function preencherCarrinho(produtos){
    produtos.forEach(data => {
        adicionarAoCarrinho(
            data.title,
            data.image,
            data.description,
            data.price
        )
    });
    atualizarcarrinho();

}

function adicionarAoCarrinho(nome, imglink,descricao,preco){
    carrinho.push({
        "nome":nome,
        "imglink":imglink,
        "descricao":descricao,
        "preco":Number(preco),
        "Quantidade":0,
        "Total":0.0
    })
}

function atualizarcarrinho(){
    let carrinhoHtml=document.getElementById("carrinho");
    carrinho.forEach((produto,index)={
        `<div> 
        id='produto${index}'
        class='d-flex flex-row justify-content-between align-items-center pt-lg-12 pt-md-12 pb-3 border-botton mobile>
    })
}