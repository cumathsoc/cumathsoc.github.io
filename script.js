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

function changeMerchColor(color){
  // TODO: handle which merch is shown on the screen
  console.log("merch button: " + color + " was clicked.");
}