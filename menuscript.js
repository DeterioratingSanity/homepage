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

var proximityX = -1;

document.mousemove = function(proximity) {
  proximityX = event.clientX;
}
if (proximityX < 0 && proximityX < 100) {
  assess();
}

