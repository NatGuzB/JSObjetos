// Creamos un objeto llamado ListaCompras
function ListaCompras() {
  this.productos = []; // lISTA EN 0 DONDE VAMOS A GUARDAR

  // Agregar producto
  this.agregar = function(producto) {
    this.productos.push(producto); 
  };

  // Función mostrar productos de la lista
  this.mostrar = function() {
    console.log("Lista de Compras:");
    
    for (let i = 0; i < this.productos.length; i++) {
      console.log((i + 1), ". ", this.productos[i]);
    }
  };
}

// Lista de compras
const miLista = new ListaCompras();

// Productos a la lista
miLista.agregar("Manzanas");
miLista.agregar("Pan");
miLista.agregar("Leche");


miLista.mostrar();
