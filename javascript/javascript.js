//Funcion para cargar algo despues de cargar la pagina
window.addEventListener("load", function() {
    document.querySelector('.Marvel-Logo').classList.add('Opacity');
  });
  window.addEventListener("scroll", function() {
    document.querySelector('#ArrowDown').classList.add('NoOpacity');
  });
  //Funcion para cargar una animación despues de cierto tiempo
window.onload = function() {
    setTimeout(function(){
        document.querySelector('.Container-Nav').classList.add('Opacity');
    }, 3250);
};
function Characters(){
    document.getElementById('Questions').style.backgroundColor = "transparent";
    document.getElementById('Cronology').style.backgroundColor = "transparent";
    document.getElementById('Characters').style.backgroundColor = "#343434";
    document.querySelector('#ArrowDown').classList.add('Opacity');
    document.querySelector('#ArrowDown').classList.remove('NoOpacity');
    fetch('Characters.html')
    .then(response => response.text())
    .then(data => {
        let container = document.getElementById('Section');
        container.innerHTML = data;
    })
    .catch(error => console.log(error));
}
function Cronology(){
    document.getElementById('Questions').style.backgroundColor = "transparent";
    document.getElementById('Characters').style.backgroundColor = "transparent";
    document.getElementById('Cronology').style.backgroundColor = "#343434";
    document.querySelector('#ArrowDown').classList.add('Opacity');
    document.querySelector('#ArrowDown').classList.remove('NoOpacity');
    fetch('Cronology.html')
    .then(response => response.text())
    .then(data => {
        let container = document.getElementById('Section');
        container.innerHTML = data;
    })
    .catch(error => console.log(error));

}
function Questions(){
    document.getElementById('Cronology').style.backgroundColor = "transparent";
    document.getElementById('Characters').style.backgroundColor = "transparent";
    document.getElementById('Questions').style.backgroundColor = "#343434";
    document.querySelector('#ArrowDown').classList.add('Opacity');
    document.querySelector('#ArrowDown').classList.remove('NoOpacity');
    fetch('Questions.html')
    .then(response => response.text())
    .then(data => {
        let container = document.getElementById('Section');
        container.innerHTML = data;
    })
    .catch(error => console.log(error));
}