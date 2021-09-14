// Variables
const carrito = document.querySelector('#carrito');
const listaTours = document.querySelector('#lista-tours');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     listaTours.addEventListener('click', agregarTour);

     carrito.addEventListener('click', eliminarTour);

  
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

}



function agregarTour(e) {
     e.preventDefault();
    
     if(e.target.classList.contains('agregar-carrito')) {
          const tour = e.target.parentElement.parentElement;
       
          leerDatosTour(tour);
     }
}


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

     

     carritoHTML();
}


function eliminarTour(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
         
          const tourId = e.target.getAttribute('data-id')
          
     
          articulosCarrito = articulosCarrito.filter(tour => tour.id !== tourId);

          carritoHTML();
     }
}


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

function vaciarCarrito() {
   
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
      }
}