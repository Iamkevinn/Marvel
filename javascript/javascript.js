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
function Characters(){
    fetch('Characters.html')
    .then(response => response.text())
    .then(data => {
        let container = document.getElementById('Section');
        container.innerHTML = data;
    })
    .catch(error => console.log(error));
}
function Cronology(){
    fetch('Cronology.html')
    .then(response => response.text())
    .then(data => {
        let container = document.getElementById('Section');
        container.innerHTML = data;
    })
    .catch(error => console.log(error));
}
function Questions(){
    fetch('Questions.html')
    .then(response => response.text())
    .then(data => {
        let container = document.getElementById('Section');
        container.innerHTML = data;
    })
    .catch(error => console.log(error));
}