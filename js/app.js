//variables

const carrito = document.querySelector('#carrito');

const listaTours = document.querySelector ('#lista-tours');

const contenedorCarrito = document.querySelector( '#lista-carrito tbbody')

const vaciarCarritoBtn  = document.querySelector ('#vaciar-carrito')



cargarEventListeners();
function cargarEventListeners ( ) {
    //cuando agregas un curso seleccioonando 'agregar carrito'
    listaCursos.addEventListener('click', agregarTour);

}




//funciones
function agregarTour(e) {
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')) { 
    console.log (e.target)
}
}