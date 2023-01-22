//Funcion para cargar algo despues de cargar la pagina
window.addEventListener("load", function() {
    document.querySelector('.Marvel-Logo').classList.add('Opacity');
  });

  //Funcion para cargar una animación despues de 3500 microsegundos
window.onload = function() {
    setTimeout(function(){
        document.querySelector('.Container-Nav').classList.add('Opacity');
    }, 3250);
};

