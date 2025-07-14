// Objeto productos y calcula total
function Carrito() {
  this.productos = []; // Lista de productos vacia
  this.total = 0;      

  // Función agregar un producto 
  this.agregarProducto = function(nombre, precio) {
    
    this.productos.push({ nombre: nombre, precio: precio });
    
    this.total += precio;
    console.log("Agregado:", nombre, "por $", precio);
  };

  // Función calcular descuento del total
  this.calcularDescuento = function() {
    let descuento = 0;

  // Si el total es mayor a 100, se aplica 10% de descuento
  if (this.total > 100) {
    descuento = (this.total * 10) / 100; 
    console.log("Se aplicó el descuento de 10%: -$ ", descuento);

  // Si el total es mayor a 50, pero menor o igual a 100, aplica 5%
  } else if (this.total > 50) {
    descuento = (this.total * 5) / 100; 
    console.log("Se aplicó el descuento de 5%: -$ ", descuento);

  } else {
    console.log("No se aplicó descuento.");
  }


    let totalFinal = this.total - descuento;
    console.log("Total a pagar: $ ", totalFinal);
  };
}

// Carrito nuevo
const miCarrito = new Carrito();

//Producto
miCarrito.agregarProducto("Camisa", 10);
miCarrito.agregarProducto("Zapatos", 30);
miCarrito.agregarProducto("Chaqueta", 20);


miCarrito.calcularDescuento();
