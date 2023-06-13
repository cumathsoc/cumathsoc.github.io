/*
Source:
*/
let top_button = document.getElementById("top_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  console.log("why you not show up");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    top_button.style.display = "block";
  } else {
    top_button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function to_top() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
(function(window, document, undefined) {

  // code that should be taken care of right away

  window.onload = init;

  function init(){
    // the code to be called when the dom has loaded
    // #document has its nodesA
    top_button = document.getElementById("top_btn");
  }

})(window, document, undefined);

var colorStore = 'black';

function handleHoverColor(color) {
  let merchColor = document.getElementById('merch-color');
  colorStore = merchColor.innerText;
  merchColor.innerText = color.charAt(0).toUpperCase() + color.slice(1);
}

function handleHoverExitColor(color) {
  let merchColor = document.getElementById('merch-color');
  merchColor.innerText = colorStore.charAt(0).toUpperCase() + colorStore.slice(1);
}

function changeMerchColor(color){
  let mainShirt = document.getElementById('main-shirt');
  let frontShirt = document.getElementById('front-shirt');
  let backShirt = document.getElementById('back-shirt');
  let merchColor = document.getElementById('merch-color');
  
  mainShirt.src = 'images/merch/front-' + color + '-shirt.jpg';
  frontShirt.src = 'images/merch/front-' + color + '-shirt.jpg';
  backShirt.src = 'images/merch/back-' + color + '-shirt.jpg';
  merchColor.innerText = color.charAt(0).toUpperCase() + color.slice(1);

  colorStore = color;

  backShirt.classList.remove('selected-merch-thumbnail');
  frontShirt.classList.add('selected-merch-thumbnail');
}
  if(color === 'red'){
    tshirtColor.innerText = 'Red'
    backShirt.src = 'images/merch/back-red-shirt.jpg'
    frontShirt.src = 'images/merch/front-red-shirt.jpg'
    front1Shirt.src = 'images/merch/front-red-shirt.jpg'
  }
  if(color === 'black'){
    tshirtColor.innerText = 'Black'
    backShirt.src = 'images/merch/back-black-shirt.jpg'
    frontShirt.src = 'images/merch/front-black-shirt.jpg'
    front1Shirt.src = 'images/merch/front-black-shirt.jpg'
  }
}