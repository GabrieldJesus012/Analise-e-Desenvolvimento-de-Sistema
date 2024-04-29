//salvar como MeuSegundoProgramaJava.java

//nome da classe
class MeuSegundoProgramaJava
{
   //módulo principal com a entrada pela linha de comando
 public static void main (string entrada[])
 {
   //declaração de variáveis
     int n1, n2, soma;
    
   // entrada de dados
   n1= Integer.parseInt(entrada [0]);
   n2= Integer.parseInt(entrada [1]);
   //procesamento
   soma = n1 + n2;
   //saida de resultados
   System.out.println(n1+ " + " + n2 + " = " + soma);
   System.exit(0);
 }
}