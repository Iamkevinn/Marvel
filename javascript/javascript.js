let seccion = document.getElementById("Section");
//Funcion para cargar algo despues de cargar la pagina
window.addEventListener("DOMContentLoaded", function() {

});
window.addEventListener("load", function() {
    document.querySelector('.Marvel-Logo').classList.add('Opacity');
});
  //Funcion para cargar una animación despues de cierto tiempo
window.onload = function() {
    setTimeout(function(){
        document.querySelector('.Container-Nav').classList.add('Opacity');
    }, 2050);
};
function ScrollSection(){
    window.scrollTo({
        top: seccion.offsetTop,
        behavior: 'smooth'
    });
}
function Characters(){
    document.getElementById('Questions').style.backgroundColor = "transparent";
    document.getElementById('Cronology').style.backgroundColor = "transparent";
    document.getElementById('Characters').style.backgroundColor = "#212121";
    fetch('Characters.html')
    .then(response => response.text())
    .then(data => {
        let container = document.getElementById('Section');
        container.innerHTML = data;
        ScrollSection();
    })
    .catch(error => console.log(error));
}
function Cronology(){
    document.getElementById('Questions').style.backgroundColor = "transparent";
    document.getElementById('Characters').style.backgroundColor = "transparent";
    document.getElementById('Cronology').style.backgroundColor = "#212121";
    fetch('Cronology.html')
    .then(response => response.text())
    .then(data => {
        let container = document.getElementById('Section');
        container.innerHTML = data;
        ScrollSection();
    })
    .catch(error => console.log(error));

}
function Questions(){
    document.getElementById('Cronology').style.backgroundColor = "transparent";
    document.getElementById('Characters').style.backgroundColor = "transparent";
    document.getElementById('Questions').style.backgroundColor = "#212121";
    fetch('Questions.html')
    .then(response => response.text())
    .then(data => {
        let container = document.getElementById('Section');
        container.innerHTML = data;
        ScrollSection();
    })
    .catch(error => console.log(error));
}