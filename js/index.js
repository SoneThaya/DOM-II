// Your code goes here

// change fun bus logo
const funLogo = document.getElementById('logo');

function titleChange() {
  funLogo.style.fontSize = '72px'
  funLogo.style.fontWeight = 'bold'
  funLogo.style.color = 'yellow'
}
funLogo.addEventListener('click', titleChange)

// mouse over to change top logo image
const topLogo = document.getElementById('top-logo');

function changeLogo(event) {
  topLogo.src = "img/bus2.jpg";
}
topLogo.addEventListener('mouseover', changeLogo);

// wheel event listener to change image back to original
function changeBack(event) {
  topLogo.src = "img/fun-bus.jpg"
}
topLogo.addEventListener('wheel', changeBack);

// on click zoom image
const adventure = document.getElementById('adventure');

function adventureZoom() {
  adventure.style.transform = 'scale(1.25)'
}
adventure.addEventListener('click', adventureZoom)

// click to rotate image
const boat = document.getElementById('boat');

function boatRotate() {
  boat.style.transform = 'rotate(90deg)'
}
boat.addEventListener('click', boatRotate)

// drag and drop for P tags bottom section
const draggables = document.querySelectorAll('.draggable');
const destination = document.querySelectorAll('.destination');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

destination.forEach(container => {
  container.addEventListener('dragover', (e) => {
    e.preventDefault()
    const draggable = document.querySelector('.dragging')
    container.appendChild(draggable)
  })
})

// focus 
// const logoHeading = document.getElementById('logo')

// function logoHead() {
//   logoHeading.style.backgroundColor = 'blue';
// }
// logoHeading.addEventListener('focus', logoHead)


// resize
window.addEventListener("resize", () => {
  document.getElementById('text').innerHTML = Math.random()
})

// on load
window.addEventListener('load', (event) => {
  alert('What are you doing?');
});


// change bottom image from double click event
const bottomImage = document.getElementById('bottom-image');

function changeBottomImage() {
  bottomImage.src = "img/beach.jpg"
}
bottomImage.addEventListener('dblclick', changeBottomImage);

// keydown event to reload page when ESC is pressed
function escKey(event) {
  if (event.key === 'Escape') {
    location.reload()
  }
}
document.addEventListener('keydown', escKey)