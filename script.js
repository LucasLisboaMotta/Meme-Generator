const inputMeme = document.getElementById('text-input');
const paragrafo = document.getElementById('meme-text');

function mudaParagrafo() {
  paragrafo.innerText = inputMeme.value;
}

inputMeme.addEventListener('keyup', mudaParagrafo);
