function upDate(previewPic) {

  const displayBox = document.getElementById('image');

  displayBox.innerText = previewPic.alt;

  displayBox.style.backgroundImage = `url('${previewPic.src}')`;

}



function unDo() {

  const displayBox = document.getElementById('image');

  displayBox.innerText = "Passe o mouse ou navegue com a tecla Tab sobre uma imagem abaixo.";

  displayBox.style.backgroundImage = "url('')";

}



function setTabFocus() {

  console.log("Evento onload acionado: configurando tabIndex para acessibilidade.");

  const images = document.querySelectorAll('.preview');

  for (let i = 0; i < images.length; i++) {

    images[i].setAttribute('tabindex', '0');

  }

}



window.onload = setTabFocus;  

