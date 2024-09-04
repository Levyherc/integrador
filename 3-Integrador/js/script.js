/*
let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', () => {
    boxBuscar.classList.add('ativar')
});

btnFechar.addEventListener('click', () => {
    boxBuscar.classList.remove('ativar')
});
*/

// >> área de pesquisa <<
// Expandir e diminuir a lupa
const icon = document.querySelector('.lupa-buscar');
const search = document.querySelector('.buscar-box');
icon.onclick = function() {
    search.classList.toggle('ativar')
}
// limpar campo pesquisa
document.getElementById('clear-search').addEventListener('click', function() {
    document.getElementById('mysearch').value = '';
});

//slider
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

});

// Carrossel 



