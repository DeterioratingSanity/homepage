var upLeft = 0;
var upRight = 0;
var max;
var openRight;
var closeRight;


  function pageWidth(){
    max = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    openRight = max - 50;
    closeRight = max - 250;
  }

  window.addEventListener("resize",pageWidth);
  pageWidth();

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
  document.getElementById("icon").style.marginLeft = "250px";
  upLeft = 1;
  document.getElementById("keyLeft").style.transform = "rotateY(180deg)";
}
function openNavRight() {
  document.getElementById("sideNavBoxRight").style.width = "250px";
  document.getElementById("icon").style.marginRight = "250px";
  upRight = 1;
  document.getElementById("keyRight").style.transform = "rotateY(180deg)";
}

function closeNavLeft() {
  document.getElementById("sideNavBoxLeft").style.width = "0";
  document.getElementById("icon").style.marginLeft = "0";
  upLeft = 0;
  document.getElementById("keyLeft").style.transform = "rotateY(0deg)";
}
function closeNavRight() {
  document.getElementById("sideNavBoxRight").style.width = "0";
  document.getElementById("icon").style.marginRight = "0";
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

var proximityXRight = document.querySelector('#main');
document.addEventListener('mousemove', proximitySwitchRight);

function proximitySwitchRight(e){
  if (e.clientX > openRight && upRight === 0) {
    openNavRight();
  } else if (e.clientX < closeRight && upRight === 1) {
    closeNavRight();
  }
}

//headerbar
document.addEventListener('scroll',headerSwitch);


function headerSwitch() {
  if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("title").src = "littlelogo.png";
    document.getElementById("title").style.width = "150px";
    document.getElementById("title").style.marginTop = "-20px";
    document.getElementById("body").style.marginTop = "200px";
    document.getElementById("borderOne").style.top = "30px";
    document.getElementById("borderTwo").style.top = "105px";
    document.getElementById("rightBorderOne").style.top = "30px";
    document.getElementById("rightBorderTwo").style.top = "105px";
    document.getElementById("borderOne").style.width = "30%";
    document.getElementById("borderTwo").style.width = "30%";
    document.getElementById("rightBorderOne").style.width = "30%";
    document.getElementById("rightBorderTwo").style.width = "30%";
    document.getElementById("rightBorderOne").style.marginLeft = "52%";
    document.getElementById("rightBorderTwo").style.marginLeft = "52%";
  } else {
    document.getElementById("title").src = "logo.png";
    document.getElementById("title").style.width = "500px";
    document.getElementById("title").style.marginTop = "-30px";
    document.getElementById("body").style.marginTop = "520px";
    document.getElementById("borderOne").style.top = "100px";
    document.getElementById("borderTwo").style.top = "365px";
    document.getElementById("rightBorderOne").style.top = "100px";
    document.getElementById("rightBorderTwo").style.top = "365px";
    document.getElementById("borderOne").style.width = "24%";
    document.getElementById("borderTwo").style.width = "24%";
    document.getElementById("rightBorderOne").style.width = "24%";
    document.getElementById("rightBorderTwo").style.width = "24%";
    document.getElementById("rightBorderOne").style.marginLeft = "58%";
    document.getElementById("rightBorderTwo").style.marginLeft = "58%";
  }
}
/*
document.addEventListener('scroll',scrollBar);

var pathSVG = document.getElementById("pathSVG");
var length = pathSVG.getTotalLength();

pathSVG.style.strokeDasharray = length;
pathSVG.style.strokeDashoffset = length;

function scrollBar() {
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;

  // Reverse the drawing (when scrolling upwards)
  pathSVG.style.strokeDashoffset = length - draw;
}
*/

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
