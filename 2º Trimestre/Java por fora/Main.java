import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		BolsaNinja<Object> bolsaNinja = new BolsaNinja<>(); 
        bolsaNinja.adicionarItens(new Kunai("Kunai Explosiva"));
        bolsaNinja.adicionarItens(new Shuriken(3));
        bolsaNinja.adicionarItens(new Pergaminho("Invocacao do sapo"));
		System.out.println("--------- Itens da nossa bolsa-------");
		bolsaNinja.mostrarItens();
		
		// Objeto 1
		Uzumaki Naruto = new Uzumaki();
		Naruto.setNome("Naruto Uzumaki");
		Naruto.setAldeia("Aldeia da Folha");
		Naruto.setIdade(17);
		Naruto.ModoSabioAtivado();

		// Objeto 2
		Uchiha Sasuke = new Uchiha();
		Sasuke.setNome("Sasuke Uchiha");
		Sasuke.setAldeia("Aldeia da Folha");
		Sasuke.setIdade(18);
		Sasuke.ShariganAtivado();
		
		//Objeto 3
		Ninja ninja1 = new Ninja();
		System.out.println("Qual o seu nome?");
		ninja1.setNome(input.nextLine());
		System.out.println("Qual o sua aldeia?");
		ninja1.setAldeia(input.nextLine());
		System.out.println("Qual a sua idade?");
		ninja1.setIdade(input.nextInt());
		System.out.println("Meu nome é " + ninja1.getNome() + " "+ ninja1.getAldeia() + " " + ninja1.getIdade());
		
		
		
	}
}
