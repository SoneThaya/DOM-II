// Your code goes here

// mouse over to change top logo image
const topLogo = document.getElementById('top-logo');

function changeLogo(event) {
  topLogo.src = "img/bus2.jpg";
}
topLogo.addEventListener('mouseover', changeLogo);

function changeBack(event) {
  topLogo.src = "img/fun-bus.jpg"
}
topLogo.addEventListener('mouseout', changeBack)