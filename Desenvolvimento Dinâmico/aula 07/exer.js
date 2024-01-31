//após o cliente solicitar a escolha da bebida, a opção ‘switch’ deve avaliar a opção selecionada e atribuir o valor correspondente à variável ‘valor’. 
// Caso o cliente escolha uma opção inválida, uma mensagem informativa é exibida, indicando que a escolha deve ser feita entre café, leite ou chá. 
//Por fim, se uma opção válida for selecionada, exibimos uma mensagem personalizada informando o nome da bebida escolhida e o valor a ser pago, formatado com duas casas decimais.


var bebida= "chá";

switch(bebida){
    case "café":
        console.log ("Sua bebida é café. Valor a ser pago: R$ 5,00");
        break;
    case "leite":
        console.log ("Sua bebida é leite. Valor a ser pago: R$ 8,00");
        break;
    case "chá":
        console.log ("Sua bebida é chá. Valor a ser pago: R$ 2,50");
        break;
    default:
        console.log ("Escolha entre café, leite ou chá");
}