let numero = parseInt(prompt("Insira um número de 1 a 8"));
class filmes {
  constructor(numero) {
    if (numero == 1){
      this.titulo = "Harry Potter e a Pedra Filosofal";
        this.aLancamento = 2001;
    }
    else if (numero == 2){
      this.titulo = "Harry Potter e a Câmara Secreta";
        this.aLancamento = 2002;
    }
    else if (numero == 3){
      this.titulo = "Harry Potter e o Prisioneiro de Azkabana";
        this.aLancamento = 2004;
      }
    else if (numero == 4){
      this.titulo = "Harry Potter e o Cálice de Fogo";
        this.aLancamento = 2005;
    }
    else if (numero == 5){
      this.titulo = "Harry Potter e a Ordem da Fênix";
        this.aLancamento = 2007;
    }
    else if (numero == 6){
      this.titulo = "Harry Potter e o Enigma do Príncipe";
        this.aLancamento = 2009;
  }
    else if (numero == 7){
      this.titulo = "Harry Potter e as Relíquias da Morte - parte 1";
        this.aLancamento = 2010;
    }
    else if (numero == 8){
      this.titulo = "Harry Potter e as Relíquias da Morte - parte 2";
        this.aLancamento = 2011;
    }
      else {
        this.titulo = "esse filme não existe";
         this.aLancamento ="N/A";
  }
}
}

let filmeSelecionado = new filmes(numero);
console.log("Título: " + filmeSelecionado.titulo);
console.log("Ano de Lançamento: " + filmeSelecionado.aLancamento);
