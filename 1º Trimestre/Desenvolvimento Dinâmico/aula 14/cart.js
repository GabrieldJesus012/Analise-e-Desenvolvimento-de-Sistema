var valorTotal=[0,0];
var valorProuto=[50.00,30.00];
var qtd = [0,0];

function additem(item){
    var quantidade=document.getElementById('quantidade' + item); //pegando a quantidade do html
    var total=document.getElementById('total' + item); //pegando total do html
    qtd[item] +=1;//vendo a quantidade do item
    valorTotal[item] = Number(valorProuto[item]) *qtd[item];
    quantidade.innerHTML=qtd[item];//mudando a quantidade no html
    total.innerHTML= valorTotal[item].toFixed(2);
    valorcompra()
}

function remitem(item){
    if(qtd[item]>0){
        qtd[item] -=1;
        var quantidade=document.getElementById('quantidade' + item); //pegando a quantidade do html
        var total=document.getElementById('total' + item); //pegando total do html
        valorTotal[item] = Number(valorProuto[item]) * qtd[item];
        quantidade.innerHTML=qtd[item];//mudando a quantidade no html
        total.innerHTML= valorTotal[item].toFixed(2);
        valorcompra()
    }
}

function valorcompra(){
    var valortotalcompra=document.getElementById('ValorTotalCompra');
    var valor=0;
    for(var i=0;i<valorTotal.length;i++){
        valor += valorTotal[i];
    }
    valortotalcompra.innerHTML = valor.toFixed(2);
}
