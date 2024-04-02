/*
Source:
*/
let top_button = document.getElementById("top_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top_button.style.display = "block";
  } else {
    top_button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function toTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
(function (window, document, undefined) {

  window.onload = init;

  function init() {
    top_button = document.getElementById("top_btn");

  }

})(window, document, undefined);


var colorStore = 'black';

function toggleMenu() {
  let menu = document.getElementById("header-nav");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}


function showTux() {
  document.getElementById("tux").style.display = "block";
}

function hideTux() {
  document.getElementById("tux").style.display = "";
}

function showLinuxText() {
  document.getElementById("linux").style.color = "black";
}

function hideLinuxText() {
  document.getElementById("linux").style.color = "#f9fafb";
}

function piTime() {
  let date = new Date();
  if ((date.getHours() == 3 || date.getHours() == 15) && date.getMinutes() == 14) {
    let tux = document.getElementById("tux");
    tux.style.display = "block";
    tux.style.animation = "walk 60s linear";
    tux.style.animationIterationCount = "infinite";
  }
}
