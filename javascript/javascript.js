//get variables
let seccion = document.getElementById("Section");
let scrollinYprev = window.pageYOffset;
let scrollinYcurrent = window.pageXOffset;
let navbar = document.querySelector('.Nav');
//function for hide the nav while the user make scroll to bottom
/*window.addEventListener('scroll',function(){
    //Update the position of the scroll
    scrollinYcurrent = window.pageYOffset;

    //check if the user is scrolling to the top
    if(scrollinYprev < scrollinYcurrent){
        navbar.classList.add('Display');
    } else {
        navbar.classList.remove('Display');
    }
    scrollinYprev = scrollinYcurrent;
})*/

//Function for load something after load the page
/*window.addEventListener("DOMContentLoaded", function() {

});*/
//function for load something in any moment?
window.addEventListener("load", function() {
    document.querySelector('.Marvel-Logo').classList.add('Opacity');
});

//Function for load something in a time predeterminate after load the page
window.onload = function() {
    setTimeout(function(){
        document.querySelector('.StudiosText').classList.add('Opacity2');
    },2050);
    setTimeout(function(){
        document.querySelector('.Container-Nav').classList.add('Opacity');
    }, 3050);
};

//Function for animation to select any boton of the nav
function ScrollSection(){
    window.scrollTo({
        top: seccion.offsetTop,
        behavior: 'smooth'
    });
}

//Function of Section of Characters
function Characters(){
    document.getElementById('Questions').style.backgroundColor = "transparent";
    document.getElementById('Cronology').style.backgroundColor = "transparent";
    document.getElementById('Characters').style.backgroundColor = "#212121";
    fetch('Characters.html')
    .then(response => response.text())
    .then(data => {
        seccion.innerHTML = data;
        ScrollSection();
    })
    .catch(error => console.log(error));
}

//Function of section of Cronology
function Cronology(){
    document.getElementById('Questions').style.backgroundColor = "transparent";
    document.getElementById('Characters').style.backgroundColor = "transparent";
    document.getElementById('Cronology').style.backgroundColor = "#212121";
    fetch('Cronology.html')
    .then(response => response.text())
    .then(data => {
        seccion.innerHTML = data;
        ScrollSection();
    })
    .catch(error => console.log(error));

}

//Function of section of Questions
function Questions(){
    document.getElementById('Cronology').style.backgroundColor = "transparent";
    document.getElementById('Characters').style.backgroundColor = "transparent";
    document.getElementById('Questions').style.backgroundColor = "#212121";
    fetch('Questions.html')
    .then(response => response.text())
    .then(data => {
        seccion.innerHTML = data;
        ScrollSection();
    })
    .catch(error => console.log(error));
}