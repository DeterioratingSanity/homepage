var up = 0;
    
function assess() {
  if (up === 0) {
    openNav();
  } else if (up === 1) {
    closeNav(); 
  } 
}
    
function openNav() {
  document.getElementById("sideNavBox").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  up = 1;
  document.getElementById("key").style.transform = "rotateY(180deg)";
}
        
function closeNav() {
  document.getElementById("sideNavBox").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  up = 0;
  document.getElementById("key").style.transform = "rotateY(0deg)";
}

//proximity

var proximityX = document.querySelector('#main');
document.addEventListener('mousemove', proximitySwitch);

function proximitySwitch(e){
  if (e.clientX < 50 && up === 0) {
    openNav();
  } else if (e.clientX > 250 && up === 1) {
    closeNav();   
  }
}

//touchscreen

var touch = document.querySelector("#main");
var threshhold = 100;
let initialX = 0;
let moveX = 0;

touch.addEventListener("touchstart", e => {
   initialX = e.touches[0].clientX;   
;

touch.addEventListener("touchmove", e => {
   let currentX = e.touches[0].clientX;    
   moveX = currentX - initialX;
; 

touch.addEventListener("touchend", e => {
   if (moveX > threshold * Math.sign(moveX) && up === 0) {
      openNav();
   } else if (moveX < threshhold * Math.sign(moveX) && up === 1) {
      closeNav();   
   }
    
   moveX = 0;
});
                       
                       
