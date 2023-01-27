/* 

OBJEITVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer 

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal 

OBJEITVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer 
    -passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando js
    -passo 2 - dar um jeito de identificar quando o usuário clicar no botão
    -passo 3 - dar um jeito de pegar o elemento da modal do js
    -passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuario clicar no X devemos fechar a modal
    -passo 1 - dar um jeito de pegar o elemento de fehcar o modal usando js
    -passo 2 - dark um jeito de identificar quando usuário clicar no X
    -passo 3 - fechar a modal 

*/



//-passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando js
const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

function alternarmodal () {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarmodal();
    video.setAttribute("src", linkDoVideo);
});


botaoFecharModal.addEventListener("click", () => {  
    alternarmodal();
    video.setAttribute("src", "");
});

