//Objeto Libro con título y autor
function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false; // No prestado

  // Función  prestar el libro
  this.prestar = function() {
   
    if (this.prestado === true) {
      console.log("Ya prestaron este libro:", this.titulo);
    } else {
      this.prestado = true; // Lo marcamos como prestado
      console.log("Acabas de prestar:", this.titulo, "¡Que lo disfrutes!");
    }
  };
}


const miLibro = new Libro("El Principito", "Antoine de Saint-Exupéry");

miLibro.prestar(); 
miLibro.prestar(); 
miLibro.prestar(); 
