const inputMeme = document.getElementById('text-input');
const inputImg = document.getElementById('meme-insert');
const paragrafo = document.getElementById('meme-text');
const quadro = document.getElementById('meme-image');

function mudaParagrafo() {
  paragrafo.innerText = inputMeme.value;
}

function memeFundo() {
  const imagem = inputImg.files[0];
  quadro.src = URL.createObjectURL(imagem);
}

inputImg.addEventListener('change', memeFundo);
inputMeme.addEventListener('keyup', mudaParagrafo);
