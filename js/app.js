// Variables
const carrito = document.querySelector('#carrito');
const listaTours = document.querySelector('#lista-tours');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaTours.addEventListener('click', agregarTour);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminarTour);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}




// Funciones
// Función que añade el tour al carrito
function agregarTour(e) {
     e.preventDefault();
     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const tour = e.target.parentElement.parentElement;
          // Enviamos el curso seleccionado para tomar sus datos
          leerDatosTour(tour);
     }
}

// Lee los datos del curso
function leerDatosTour(tour) {
     const infoTour = {
          imagen: tour.querySelector('img').src,
          titulo: tour.querySelector('h4').textContent,
          precio: tour.querySelector('.precio span').textContent,
          id: tour.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( tour => tour.id === infoTour.id ) ) { 
          const tours = articulosCarrito.map( tour => {
               if( tour.id === infoTour.id ) {
                    tour.cantidad++;
                     return tour;
                } else {
                     return tour;
             }
          })
          articulosCarrito = [...tours];
     }  else {
          articulosCarrito = [...articulosCarrito, infoTour];
     }

     console.log(articulosCarrito)

     

     // console.log(articulosCarrito)
     carritoHTML();
}

// Elimina el curso del carrito en el DOM
function eliminarTour(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
          // e.target.parentElement.parentElement.remove();
          const cursoId = e.target.getAttribute('data-id')
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(tour => tour.id !== tourId);

          carritoHTML();
     }
}


// Muestra el curso seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(tour => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${tour.imagen}" width=100>
               </td>
               <td>${tour.titulo}</td>
               <td>${tour.precio}</td>
               <td>${tour.cantidad} </td>
               <td>
                    <a href="#" class="borrar-curso" data-id="${tour.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });

}

// Elimina los cursos del carrito en el DOM
function vaciarCarrito() {
     // forma lenta
     // contenedorCarrito.innerHTML = '';


     // forma rapida (recomendada)
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}