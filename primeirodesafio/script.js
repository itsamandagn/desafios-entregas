var nome = prompt("insira aqui o seu nome");
if (nome === "") alert("por favor, insira uma resposta");
var singer = prompt("insira aqui o nome do seu cantor(a) ou banda favorita");
if (singer === "") alert("por favor, insira uma resposta");
var music = prompt("insira aqui a sua música favorita");
if (music === "") alert("por favor, insira uma resposta");
alert(
  "Olá! Meu nome é" +
    " " +
    nome +
    ", meu cantor(a) ou favorita é" +
    " " +
    singer +
    " " +
    "e minha música favorita é" +
    " " +
    music
);
