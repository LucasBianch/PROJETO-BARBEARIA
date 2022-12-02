modalMessage = new Array();
modalMessage.push("<img src='IMG-Barbas/estilo01.jpg' alt='detalhe01-cort01' class='img-most'><img src='IMG-Barbas/estilo01.jpg' class='img-most'><img src='IMG-Barbas/estilo01.jpg' alt='detalhe03-cort01' class='img-most'>")
modalMessage.push("<img src='IMG-Barbas/estilo02-vert.jpg' alt='detalhe01-cort02' class='img-most'><img src='IMG-Barbas/estilo02-vert.jpg' alt='detalhe02-cort02' class='img-most'><img src='IMG-Barbas/estilo02-vert.jpg' alt='detalhe03-cort02' class='img-most>")
modalMessage.push("<img src='IMG-Barbas/estilo03-vert.jpg' alt='detalhe01-cort03' class='img-most'><img src='IMG-Barbas/estilo03-vert.jpg' alt='detalhe02-cort03' class='img-most'><img src='IMG-Barbas/estilo03-vert.jpg' alt='detalhe03-cort03' class='img-most'>")
modalMessage.push("<img src='IMG-Barbas/estilo04-vert.jpg' alt='detalhe01-cort04' class='img-most'><img src='IMG-Barbas/estilo04-vert.jpg' alt='detalhe02-cort04' class='img-most'><img src='IMG-Barbas/estilo04-vert.jpg' 'alt='detalhe03-cort04' class='img-most'>")
modalMessage.push("<img src='IMG-Barbas/estilo05-vert.jpg' alt='detalhe01-cort05' class='img-most'><img src='IMG-Barbas/estilo05-vert.jpg' alt='detalhe02-cort05' class='img-most'><img src='IMG-Barbas/estilo05-vert.jpg' alt='detalhe03-cort05' class='img-most'>")
modalMessage.push("<img src='IMG-Barbas/estilo06-vert.jpg' alt='detalhe01-cort06' class='img-most'><img src='IMG-Barbas/estilo06-vert.jpg' alt='detalhe02-cort06' class='img-most'><img src='IMG-Barbas/estilo06-vert.jpg' alt='detalhe03-cort06' class='img-most'>")
modalMessage.push("<img src='IMG-Barbas/estilo07-vert.jpg' alt='detalhe01-cort07' class='img-most'><img src='IMG-Barbas/estilo07-vert.jpg' alt='detalhe02-cort07' class='img-most'><img src='IMG-Barbas/estilo07-vert.jpg' alt='detalhe03-cort07' class='img-most'>")
modalMessage.push("<img src='IMG-Barbas/estilo08-vert.jpg' alt='detalhe01-cort08' class='img-most'><img src='IMG-Barbas/estilo08-vert.jpg' alt='detalhe02-cort08' class='img-most'><img src='IMG-Barbas/estilo08-vert.jpg' alt='detalhe03-cort08' class='img-most'>")
modalMessage.push("<img src='Abas/estilos-de-cortes-de-cabelo-img/corte 01.jpg' alt='detalhe01-cort01' class='img-most'><img src='Abas/estilos-de-cortes-de-cabelo-img/corte 01.jpg' alt='detalhe02-cort01' class='img-most'><img src='Abas/estilos-de-cortes-de-cabelo-img/corte 01.jpg' alt='detalhe03-cort01' class='img-most'>")
modalMessage.push("<img src='Abas/estilos-de-cortes-de-cabelo-img/corte 02.jpg' alt='detalhe01-cort02' class='img-most'><img src='Abas/estilos-de-cortes-de-cabelo-img/corte 02.jpg' alt='detalhe02-cort02' class='img-most'><img src='Abas/estilos-de-cortes-de-cabelo-img/corte 02.jpg' alt='detalhe03-cort02' class='img-most'>")
modalMessage.push("<img src='Abas/estilos-de-cortes-de-cabelo-img/corte 03.jpg' alt='detalhe01-cort03' class='img-most'><img src='Abas/estilos-de-cortes-de-cabelo-img/corte 03.jpg' alt='detalhe02-cort03' class='img-most'><img src='Abas/estilos-de-cortes-de-cabelo-img/corte 03.jpg' alt='detalhe03-cort03' class='img-most'>")
modalMessage.push("<img src='Abas/estilos-de-cortes-de-cabelo-img/corte 04.jpg' alt='detalhe01-cort04' class='img-most'><img src='Abas/estilos-de-cortes-de-cabelo-img/corte 04.jpg' alt='detalhe02-cort04' class='img-most'><img src='Abas/estilos-de-cortes-de-cabelo-img/corte 04.jpg' alt='detalhe03-cort04' class='img-most'>")
modalMessage.push("<img src='Abas/estilos-de-cortes-de-cabelo-img/corte 05.jpg' alt='detalhe01-cort05' class='img-most'><img src='Abas/estilos-de-cortes-de-cabelo-img/corte 05.jpg' alt='detalhe02-cort05' class='img-most'><img src='Abas/estilos-de-cortes-de-cabelo-img/corte 05.jpg' alt='detalhe03-cort05' class='img-most'>")
modalMessage.push("<img src='Abas/estilos-de-cortes-de-cabelo-img/corte 06.jpg' alt='detalhe01-cort06' class='img-most'><img src='Abas/estilos-de-cortes-de-cabelo-img/corte 06.jpg' alt='detalhe02-cort06' class='img-most'><img src='Abas/estilos-de-cortes-de-cabelo-img/corte 06.jpg' alt='detalhe03-cort06' class='img-most'>")


function showModal(index){
    let idModal = `modal-qs-${index}`;
    let modal = document.getElementById(idModal);
    //modal.classList.add("modal-dialog");
    modal.style.display = "block";
    let idContentModal = `${idModal}-content`;
    let modalQSCcontent = document.getElementById(idContentModal);
    modalQSCcontent.innerHTML = getContentModal(index);
}

function hideModal(index){
    let idModal = `modal-qs-${index}`;
    let modal = document.getElementById(idModal);
    //modal.classList.remove("show-modal");
    modal.style.display = "none";
}

function getContentModal(index){
    return modalMessage[index];
}