let numeroSecreto = gerarNumeroAleatorio();

const botaoChutar = document.querySelector(".botao-chutar");

const numeroMenor = 1;
const numeroMaior = 10;

function exibirTextoNaTela(classHtml, texto) {
  let campo = document.querySelector(classHtml);
  campo.innerHTML = texto;
}

exibirTextoNaTela(".titulo-jogo", "Jogo do número secreto");
exibirTextoNaTela(
  ".texto__paragrafo",
  `Escolha um número entre ${numeroMenor} e ${numeroMaior}`
);

function verificarChute() {
  console.log(numeroSecreto);
}

botaoChutar.addEventListener("click", () => {
  verificarChute();
});

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
