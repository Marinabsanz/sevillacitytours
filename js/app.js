//variables

const carrito = document.querySelector('#carrito');

const listaTours = document.querySelector ('#lista-tours');

const contenedorCarrito = document.querySelector( '#lista-carrito tbbody')

const vaciarCarritoBtn  = document.querySelector ('#vaciar-carrito')



cargarEventListeners();
function cargarEventListeners ( ) {
    //cuando agregas un tour seleccioonando 'reserva tu tour'
    listaTours.addEventListener('click', agregarTour);

}




//funciones
function agregarTour(e) {
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')) { 
    const tourSelected = e.target.parentElement.parentElement;

    addToCarrito (tourSelected);
}
}

//leer contenido del html al dar click para meter info en carrito

function addToCarrito (tourSelected) {
    console.log(tourSelected);

const infoTour = {
    imagen:tourSelected.querySelector('img').src,
    titulo: tourSelected.querySelector('h4').textContent,
    precio: tourSelected.querySelector('.precio span').textContent,
    

   
}

console.log(infoTour)
}