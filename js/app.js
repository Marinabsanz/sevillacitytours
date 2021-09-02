//variables

const carrito = document.querySelector('#carrito');

const listaCursos = document.querySelector ('#lista-cursos');

const contenedorCarrito = document.querySelector( '#lista-carrito tbbody')

const vaciarCarritoBtn  = document.querySelector ('#vaciar-carrito')



cargarEventListeners();
function cargarEventListeners ( ) {
    //cuando agregas un curso seleccioonando 'agregar carrito'
    listaCursos.addEventListener('click', agregarCurso);

}




//funciones
function agregarCurso(e) {
    e.preventDefault()
    if(e.target.classList.contains('agregar-carrito')) { 
    console.log (e.target)
}
}