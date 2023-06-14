/*
Source:
*/
let top_button = document.getElementById("top_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  console.log("why you not show up");
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
    document.getElementById("shirt-black-23").classList.add("selected-color");

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

function handleHoverColor(color) {
  let merchColor = document.getElementById('merch-color');
  colorStore = merchColor.innerText;
  merchColor.innerText = color.charAt(0).toUpperCase() + color.slice(1);
}

function handleHoverExitColor(color) {
  let merchColor = document.getElementById('merch-color');
  merchColor.innerText = colorStore.charAt(0).toUpperCase() + colorStore.slice(1);
}

var sideStore = 'front';

function changeMerchColor(color) {

  let mainShirt = document.getElementById('main-shirt');
  let frontShirt = document.getElementById('front-shirt');
  let backShirt = document.getElementById('back-shirt');
  let merchColor = document.getElementById('merch-color');
  
  mainShirt.src = 'images/merch/' + sideStore + '-' + color + '-shirt.jpg';

  let blackCircleClassList = document.getElementById("shirt-black-23").classList;
  let redCircleClassList = document.getElementById("shirt-red-23").classList;

  mainShirt.src = 'images/merch/front-' + color + '-shirt.jpg';
  frontShirt.src = 'images/merch/front-' + color + '-shirt.jpg';
  backShirt.src = 'images/merch/back-' + color + '-shirt.jpg';
  merchColor.innerText = color.charAt(0).toUpperCase() + color.slice(1);

  colorStore = color;

  if (sideStore == 'front') {
    backShirt.classList.remove('selected-merch-thumbnail');
    frontShirt.classList.add('selected-merch-thumbnail');
  }
  else {
    frontShirt.classList.remove('selected-merch-thumbnail');
    backShirt.classList.add('selected-merch-thumbnail');
  backShirt.classList.remove('selected-merch-thumbnail');
  frontShirt.classList.add('selected-merch-thumbnail');

  if (color === "black") {
    blackCircleClassList.add("selected-color");
    redCircleClassList.remove("selected-color");
  }
  else {
    blackCircleClassList.remove("selected-color");
    redCircleClassList.add("selected-color");
  }
}


function changeMainMerchView(side) {
  let mainShirt = document.getElementById('main-shirt');
  let clickedShirt = document.getElementById(side + '-shirt');
  mainShirt.src = clickedShirt.src;
  sideStore = side;

  clickedShirt.classList.add('selected-merch-thumbnail');

  if (side == 'front') {
    document.getElementById('back-shirt').classList.remove('selected-merch-thumbnail');
  }
  else {
    document.getElementById('front-shirt').classList.remove('selected-merch-thumbnail');
  }
}