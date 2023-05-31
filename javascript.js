function saludo() {
    var nombre = prompt("Ingrese su nombre:");
  
    if (nombre === null || nombre ==="" ) {
      alert("Por favor, ingrese su nombre.");
    } else {
      alert("¡Bienvenido, " + nombre + "!");
    }
  }

  let edad;
  edad=prompt("Ingrese su esad");
  if(edad >= 18){
    alert(Podes ingresar. Bienvenido);
  }
  else{
    alert("no podes entrar"); }
  

  function calcularCostoEnvio(direccionCliente) {
    // El  cliente está en San Nicolás dentro de un radio de 20km?
    var estaEnSanNicolas = direccionCliente.includes('San Nicolás');
    var estaEnRadio20km = false;  // Aquí puedes agregar la lógica para verificar si está en el radio de 20 km
  
    // Calcular el costo de envío
    if (estaEnSanNicolas || estaEnRadio20km) {
      return 0;  // El envío es gratuito
    } else {
      return 800;  // El costo de envío es $800
    }
  }
  
  // Función que muestra el mensaje de alerta cuando el usuario intenta salir de la página
function mostrarAlerta() {
  return "¡Atención! Estás saliendo de este sitio web.";
}

// Agregar un evento al cargar la página
window.onload = function() {
  // Agregar un evento al intentar salir de la página
  window.addEventListener("beforeunload", function(event) {
    // Personalizar el mensaje de alerta llamando a la función mostrarAlerta()
    var mensaje = mostrarAlerta();
    // Configurar el mensaje en la ventana emergente
    event.returnValue = mensaje;
    return mensaje;
  });
};
