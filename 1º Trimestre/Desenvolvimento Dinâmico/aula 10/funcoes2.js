const shoppingCart= [];
function AddItem (item){
    shoppingCart.push(item)
}

function RemoveItem (item){
    const temOitem = shoppingCart.indexOf(item);
    if(temOitem !== -1){
        shoppingCart.splice(temOitem,1)
    }
}

function ViewCart (){
    if(shoppingCart.length==0){
        console.log("Seu carrinho está vazio")
    }else{
        console.log("Itens no seu carrinho: ");
        for(let i=0; i < shoppingCart.length; i++){
            console.log (`${i + 1} - ${shoppingCart[i]}`);
        }
    }
}

function clearCart (){
    shoppingCart.length=0;
    console.log ("Seu carrinho foi apagado")
}

AddItem("Tenis");
AddItem("Blusa");
AddItem("Short");
ViewCart()

RemoveItem ("Blusa");
ViewCart()

clearCart()
ViewCart()

