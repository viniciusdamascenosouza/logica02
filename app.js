let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

const botaoChutar = document.querySelector(".botao__chutar");
const botaoLimpar = document.getElementById("reiniciar");

const numeroMenor = 1;
const numeroMaior = 20;

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
  let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
  let mensagemTentativas = `Parabéns! Você descobriu o número secreto: ${numeroSecreto}, com ${tentativas} ${palavraTentativas}!`;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("p", mensagemTentativas);

    botaoLimpar.removeAttribute("disabled");
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela("p", `O número secreto é menor que ${chute}.`);
  } else {
    exibirTextoNaTela("p", `O número secreto é maior que ${chute}.`);
  }
  tentativas++;
  limparCampo();
}

botaoChutar.addEventListener("click", () => {
  verificarChute();
});

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 20 + 1);
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  window.location.reload();
}
