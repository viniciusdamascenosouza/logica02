let tituloJogo = document.querySelector(".titulo-jogo");
tituloJogo.innerHTML = `
    Jogo do número secreto
`;

const numeroMenor = 1;
const numeroMaior = 10;
let paragrafo = document.querySelector(".texto__paragrafo");
paragrafo.innerHTML = `
    Escolha um número entre ${numeroMenor} e ${numeroMaior}
`;
