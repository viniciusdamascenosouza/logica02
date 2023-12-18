const frase = "olá João";
const palavraBuscada = "olá";

function buscaPalavra() {
  if (frase.includes(palavraBuscada)) {
    console.log(
      `A palavra "${palavraBuscada}" está presente na frase "${frase}".`
    );
  } else {
    console.log(
      `A palavra "${palavraBuscada}" não está presente na frase "${frase}".`
    );
  }
}

console.log(buscaPalavra());
