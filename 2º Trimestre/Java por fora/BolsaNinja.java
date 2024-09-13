import java.util.ArrayList;
import java.util.List;

public class BolsaNinja <T> {//T de tipo generico
	private List<T> itensninja;
	
	public BolsaNinja() {
		this.itensninja = new ArrayList<>();
	}
	
	public void adicionarItens(T itens) {
		itensninja.add(itens);
	}
	
	public void mostrarItens() {
		for(T itens: itensninja) {
			System.out.println(itens);
		}
	}
}
