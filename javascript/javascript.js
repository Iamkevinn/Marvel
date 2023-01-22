//Funcion para cargar algo despues de cargar la pagina
window.addEventListener("load", function() {
    document.querySelector('.Marvel-Logo').classList.add('Opacity');
  });

  //Funcion para cargar una animación despues de 3500 microsegundos
window.onload = function() {
    setTimeout(function(){
        document.querySelector('.Button-Menu').classList.add('Opacity');
    }, 3500);
};
function Menu(){
    document.querySelector('#Menuid').classList.add('Display');
    document.querySelector('#Characters').classList.add('Display');
    document.querySelector('#Time').classList.add('Display');
    document.querySelector('#Questions').classList.add('Display');
    document.querySelector('.Nav').classList.add('Background');
    document.getElementById('Icon-C').style.margin = "0 0 0 30px";
    document.getElementById('Icon-T').style.margin = "0 0 0 30px";
    document.getElementById('Icon-Q').style.margin = "0 0 0 15px";
}
