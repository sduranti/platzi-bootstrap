/*esta funcion se va a ejecutar cuando se termine de cargar el sitio*/
$(function(){
    /*agarramos todos los elementos que tengan el atributo data-toogle Y vamos a llamar a la funcion tooltip sobre ellos*/
    /*tooltip es un plugin de jeyquery que agrega bootstrap por nosotros*/
    $('[data-bs-toogle="tooltip"]').tooltip();
})

