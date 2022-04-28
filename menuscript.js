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
document.addEventListener('mouseover', proximitySwitch);

function proximitySwitch(e){
  if (e.clientX < 150 && up === 0) {
    openNav();
  }
}


/**
var proximityX = pageX;

document.onclick = function(proximity) {
  proximityX = event.clientX;
}
if (proximityX < 100) {
  assess();
  document.getElementById("gremlin").innerHTML = "proximityX"; 
}
**/

