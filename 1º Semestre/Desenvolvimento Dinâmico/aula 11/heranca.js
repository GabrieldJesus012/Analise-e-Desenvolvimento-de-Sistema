class DispositoEletronico{
    constructor(nome){
        this.nome=nome;
    }
}

class SmartPhone extends DispositoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor=cor;
        this.modelo=modelo;
    }
}

var s1= new SmartPhone("Samsung","Preto","S23");
console.log(s1);

