const inputMeme = document.getElementById('text-input');
const inputImg = document.getElementById('meme-insert');
const paragrafo = document.getElementById('meme-text');
const quadro = document.getElementById('meme-image');
const fogo = document.getElementById('fire');
const agua = document.getElementById('water');
const terra = document.getElementById('earth');
const container = document.getElementById('meme-image-container');
const exemplo = document.getElementById('container-exemplos');

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

function fundoBase(evento) {
  quadro.src = evento.target.src;
}

exemplo.addEventListener('click', fundoBase);
fogo.addEventListener('click', mudarFogo);
agua.addEventListener('click', mudarAgua);
terra.addEventListener('click', mudarTerra);
inputImg.addEventListener('change', memeFundo);
inputMeme.addEventListener('keyup', mudaParagrafo);
