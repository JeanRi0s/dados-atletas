class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) this.categoria = "Infantil";
    else if (this.idade >= 12 && this.idade <= 13) this.categoria = "Juvenil";
    else if (this.idade >= 14 && this.idade <= 15) this.categoria = "Intermediário";
    else if (this.idade >= 16 && this.idade <= 30) this.categoria = "Adulto";
    else this.categoria = "Sem categoria";
  }

  calculaIMC() {
    this.imc = this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    const notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
    notasOrdenadas.shift();
    notasOrdenadas.pop();
    const soma = notasOrdenadas.reduce((a, b) => a + b, 0);
    this.mediaValida = soma / notasOrdenadas.length;
  }

  obtemNomeAtleta() { return this.nome; }
  obtemIdadeAtleta() { return this.idade; }
  obtemPesoAtleta() { return this.peso; }
  obtemNotasAtleta() { return this.notas; }
  obtemCategoria() { return this.categoria; }
  obtemIMC() { return this.imc; }
  obtemMediaValida() { return this.mediaValida; }
}

const atleta1 = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
atleta1.calculaCategoria();
atleta1.calculaIMC();
atleta1.calculaMediaValida();

console.log(atleta1);
