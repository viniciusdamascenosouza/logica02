let numeroSecreto = 5;

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
  let chute = document.querySelector(".container__input").value;

  if(chute == numeroSecreto) {
    exibirTextoNaTela('p', `Você acertou! O número secreto é ${numeroSecreto}.`)
  } else if(chute > numeroSecreto){
    exibirTextoNaTela('p', `O número secreto é menor que ${chute}.`)
  } else {
    exibirTextoNaTela('p', `O número secreto é maior que ${chute}.`)
  }
}

botaoChutar.addEventListener("click", () => {
  verificarChute();
});

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}
