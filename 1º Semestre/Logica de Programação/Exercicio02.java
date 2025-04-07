import javax.swing.*;

class Exercicio02
{
 public static void main (String entrada[])
 { 
  //declaracao de variaveis
  int n1, n2;
  double pd1, pd2 , div;
  String msg = "";
 
  //entrada de dados
  n1 = Integer.parseInt (JOptionPane.showInputDialog("Digite um numero inteiro"));
  n2 = Integer.parseInt (JOptionPane.showInputDialog("Digite outro numero inteiro"));

 //processamento
 div = (int)n1 / (int)n2;
 pd1 = Math.pow(n1,n2);
 pd2 = Math.pow(n2,n1);


 //saida de resultados
 msg = msg + "quociente da divisao de " + n1 + " por " + n2 + " = " + div + "\n";
 msg = msg + "potencia de " + n1 +  " por " + n2 + " = " + pd1 + "\n";
 msg = msg + "potencia de " + n2 +  " por " + n1 + " = " + pd2 + "\n";
 JOptionPane.showMessageDialog(null, msg);
  
 System.exit(0);
 }
}