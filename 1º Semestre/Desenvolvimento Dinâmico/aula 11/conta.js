class ContaCliente {
    constructor (numeroconta,saldo,debito,credito){
        this.numeroconta = numeroconta;
        this.saldo=saldo;
        this.debito=debito;
        this.credito=credito;
    }
    calcularSaldoAtual(){
        return this.saldo - this.debito + this.credito
    }
    verificarSaldo(){
        const SaldoAtual= this.calcularSaldoAtual()
        if (SaldoAtual>=0){
            alert("Saldo positivo R$ " + SaldoAtual)
        }else{
            alert("Saldo negativo R$ " + SaldoAtual)
        }
    }
}
let numeroconta = prompt("Digite o número da conta do cliente")
let saldo = parseFloat(prompt("Digite o saldo do cliente"))
let debito= parseFloat(prompt("Digite o debito do cliente"))
let credito= parseFloat(prompt("Digite o credito do cliente"))

let conta = new ContaCliente(numeroconta,saldo,debito,credito)
conta.verificarSaldo();

