var upLeft = 0;
var upRight = 0;
    
function assessLeft() {
  if (upLeft === 0) {
    openNavLeft();
  } else if (upLeft === 1) {
    closeNavLeft(); 
  } 
}
function assessRight() {
  if (upRight === 0) {
    openNavRight();
  } else if (upRight === 1) {
    closeNavRight(); 
  } 
}
    
function openNavLeft() {
  document.getElementById("sideNavBoxLeft").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  upLeft = 1;
  document.getElementById("keyLeft").style.transform = "rotateY(180deg)";
}
function openNavRight() {
  document.getElementById("sideNavBoxRight").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
  upRight = 1;
  document.getElementById("keyRight").style.transform = "rotateY(180deg)";
}
        
function closeNavLeft() {
  document.getElementById("sideNavBoxLeft").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  upLeft = 0;
  document.getElementById("keyLeft").style.transform = "rotateY(0deg)";
}
function closeNavRight() {
  document.getElementById("sideNavBoxRight").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  upRight = 0;
  document.getElementById("keyRight").style.transform = "rotateY(0deg)";
}

//proximity

var proximityXLeft = document.querySelector('#main');
document.addEventListener('mousemove', proximitySwitchLeft);

function proximitySwitchLeft(e){
  if (e.clientX < 50 && upLeft === 0) {
    openNavLeft();
  } else if (e.clientX > 250 && upLeft === 1) {
    closeNavLeft();   
  }
}

/*touchscreen

let touchStartX = 0;
let touchEndX = 0;

const slider = document.getElementById('slider');

function handleGesture() {
  if (touchendX < touchstartX) alert('swiped left!')
  if (touchendX > touchstartX) alert('swiped right!')
}

slider.addEventListener('touchstart', e => {
   touchStartX = e.changedTouches[0].screenX
})
slider.addEventListener('touchend', e => {
   touchend = e.changedTouches[0].screenX 
   handleGesture();
})                      
                       
*/
