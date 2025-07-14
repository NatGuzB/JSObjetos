// Objeto  reproductor de música
function Reproductor() {
  this.estado = "detenido"; 

  // Función  reproducir música
  this.play = function() {

    if (this.estado === "detenido" || this.estado === "pausado") {
      this.estado = "reproduciendo";
      console.log("Reproduciendo música...");
    } else {
      console.log("Ya se está reproduciendo música.");
    }
  };

  // Función  pausar la música
  this.pausar = function() {
    
    if (this.estado === "reproduciendo") {
      this.estado = "pausado";
      console.log("Música pausada.");
    } else {
      console.log("No hay música reproduciéndose.");
    }
  };

  // Función detener la música (sin importar el estado)
  this.detener = function() {
    this.estado = "detenido";
    console.log("Música detenida.");
  };
}


const miReproductor = new Reproductor();


miReproductor.play();     
miReproductor.play();      
miReproductor.pausar();   
miReproductor.pausar();    
miReproductor.detener();   
