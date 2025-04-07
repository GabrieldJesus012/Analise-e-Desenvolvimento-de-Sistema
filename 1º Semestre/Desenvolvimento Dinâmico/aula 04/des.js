//idade, experiência em anos, nível de educação e se o candidato possui um certificado.

//Os critérios de elegibilidade incluem idade mínima, número mínimo de anos de experiência, nível mínimo de educação e a obrigatoriedade ou não de um certificado. O programa deve verificar se o candidato atende a todos esses critérios e, com base nessa verificação, fornecer um resultado indicando se o candidato é elegível para a vaga.

var idade =28;
var expanos= 5;
var neducação= "superior";
var pcertificado = true;


var idadeMinima = 18;
var experienciaMinimaAnos = 3;
var nivelEducacaoMinimo = "superior";
var certificadoObrigatorio = true;

var elegivel = 
idade >= idadeMinima && expanos >= experienciaMinimaAnos &&
(neducação === nivelEducacaoMinimo || pcertificado) &&(!certificadoObrigatorio || pcertificado);

console.log("Elegível para a vaga? " + elegivel);


