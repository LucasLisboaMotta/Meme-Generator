const inputMeme = document.getElementById('text-input');
const inputImg = document.getElementById('meme-insert');
const paragrafo = document.getElementById('meme-text');
const quadro = document.getElementById('meme-image');
const fogo = document.getElementById('fire');
const agua = document.getElementById('water');
const terra = document.getElementById('earth');
const container = document.getElementById('meme-image-container');

function mudaParagrafo() {
  paragrafo.innerText = inputMeme.value;
}

function memeFundo() {
  const imagem = inputImg.files[0];
  quadro.src = URL.createObjectURL(imagem);
}

function mudarFogo() {
  container.className = 'fogo';
}

function mudarAgua() {
  container.className = 'agua';
}

function mudarTerra() {
  container.className = 'terra';
}

fogo.addEventListener('click', mudarFogo);
agua.addEventListener('click', mudarAgua);
terra.addEventListener('click', mudarTerra);
inputImg.addEventListener('change', memeFundo);
inputMeme.addEventListener('keyup', mudaParagrafo);
