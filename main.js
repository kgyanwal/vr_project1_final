var startExperienteBtn = document.getElementById('start_experience');

startExperienteBtn.onclick = function(){
    document.getElementById('container').outerHTML = '';
    document.getElementsByTagName('a-scene')[0].style.zIndex = 'auto';
};


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myFunc() {
  var x = document.getElementsByClassName("hide");
  x[0].innerHTML = "sanitizer is gone";
  x[1].innerHTML = "log is gone";
}

function myFunc1() {
  var x = document.getElementsByClassName("hide");
  x[2].innerHTML = "mask is taken";
}
