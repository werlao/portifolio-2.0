const caracteristicas = $('#link1');
const projetos = $('#link2');
const sobre = $('#link3');

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

caracteristicas.click(function() {
    $('html, body').animate({scrollTop:500}, 'slow');
});
projetos.click(function() {
    $('html, body').animate({scrollTop:1500}, 'slow');
});
sobre.click(function() {
    $('html, body').animate({scrollTop:5000}, 'slow');
});