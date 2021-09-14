//variables
const carrito = document.querySelector('#carrito');
const listaTours = document.querySelector ('#lista-tours');
const contenedorCarrito = document.querySelector( '#lista-carrito tbbody')
const vaciarCarritoBtn  = document.querySelector ('#vaciar-carrito')
let bookedTours= [];


//listeners
cargarEventListeners();
function cargarEventListeners ( ) {
    //dispara cuando agregas un tour seleccionando 'reserva tu tour'
    listaTours.addEventListener('click', agregarTour);
    
    //al eliminar tour del carrito
    carrito.addEventListener ('click' , eliminarTour);
     //al vaciar carrito
     vaciarCarritoBtn.addEventListener ( 'click', vaciarCarrito);

}

//funciones
function agregarTour(e) {
    e.preventDefault()
    
    if(e.target.classList.contains('agregar-carrito')) { 
    const tour = e.target.parentElement.parentElement;

    addToCarrito (tour);
}
}

//leer contenido del html al dar click para meter info en carrito

function addToCarrito (tour) {
   

const infoTour = {
    imagen:tour.querySelector('img').src,
    titulo: tour.querySelector('h4').textContent,
    precio: tour.querySelector('.precio span').textContent,
    id: tour.querySelector('a').getAttribute('data-id'), 
    cantidad: 1
}


     if( bookedTours.some( tour => tour.id === infoTour.id ) ) { 
          const tours = bookedTours.map( tour => {
               if( tour.id === infoTour.id ) {
                    tour.cantidad++;
                     return tour;
                } else {
                     return tour;
             }
          })
          bookedTours = [...tours];
     }  else {
          bookedTours = [...bookedTours, infoTour];
     }

	
console.log (bookedTours)
carritoHtml();

}


// Elimina el tour del carrito en el DOM
function eliminarTour(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
          // e.target.parentElement.parentElement.remove();
          const tourId = e.target.getAttribute('data-id')
          
          // Eliminar del arreglo del carrito
          bookedTours = bookedTours.filter(tour => tour.id !== tourId);

          carritoHtml();
     }
}


function carritoHtml ()  {
  //limpiar html 
vaciarCarrito ();

    //recorre carrito y genera el html
bookedTours.forEach( tour => {
    const row = document.createElement ('tr') ;
    row.innerHTML = 
    `<td>  <img src = '${tour.imagen}'  width=100   </> </td>;
    <td>  ${tour.titulo}</td>
    <td>  ${tour.precio}</td>
    <td> 
    
    <a href = '#'  class= 'borrar-curso' data-id= '${tour.id}'> X </td>

    `;
    
  //agregar el html en el tbdoy
  listaTours.appendChild(row)})};

//eliminar tours del tbdoy
function vaciarCarrito() {
  
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}
