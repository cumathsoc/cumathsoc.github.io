var colorStore = 'black';
var sideStore = 'front';

/*
MERCH NAMING CONVENTION
  * <merch_year>-<merch_type>-<color/side>
  * Example: y22-shirt-black
  * y22 means year 2022
*/

function buildRootId(merch_year, merch_type) {
  return merch_year + '-' + merch_type + '-';
}

function handleHoverColor(merch_year, merch_type, color) {
  let root_id = buildRootId(merch_year, merch_type);

  let merchColor = document.getElementById(root_id + 'merch-color');
  colorStore = merchColor.innerText;
  merchColor.innerText = color.charAt(0).toUpperCase() + color.slice(1);
}

function handleHoverExitColor(merch_year, merch_type, color) {
  let root_id = buildRootId(merch_year, merch_type);

  let merchColor = document.getElementById(root_id +'merch-color');
  merchColor.innerText = colorStore.charAt(0).toUpperCase() + colorStore.slice(1);
}

function changeMerchColor(merch_year, merch_type, color) {
  let root_id = buildRootId(merch_year, merch_type);
 
  let merchMain = document.getElementById(root_id + 'main-wrapper');
  let mainMerch = document.getElementById(root_id + 'main');
  let frontMerch = document.getElementById(root_id + 'front');
  let backMerch = document.getElementById(root_id + 'back');
  let merchColor = document.getElementById(root_id + 'merch-color');


  let blackCircleClassList = document.getElementById(root_id + "black").classList;
  let redCircleClassList = document.getElementById(root_id + "red").classList;

  mainMerch.src = 'images/merch/' + root_id + sideStore + '-' + color + '.jpg';
  merchMain.style.backgroundImage = "url('" + mainMerch.src + "')";
  frontMerch.src = 'images/merch/' + root_id + 'front-' + color + '.jpg';
  backMerch.src = 'images/merch/' + root_id + 'back-' + color + '.jpg';
  merchColor.innerText = color.charAt(0).toUpperCase() + color.slice(1);

  colorStore = color;

  if (sideStore == 'front') {
    backMerch.classList.remove('selected-merch-thumbnail');
    frontMerch.classList.add('selected-merch-thumbnail');
  }
  else {
    frontMerch.classList.remove('selected-merch-thumbnail');
    backMerch.classList.add('selected-merch-thumbnail');
  }

  if (color === "black") {
    blackCircleClassList.add("selected-color");
    redCircleClassList.remove("selected-color");
  }
  else {
    blackCircleClassList.remove("selected-color");
    redCircleClassList.add("selected-color");
  }
}


function changeMainMerchView(merch_year, merch_type, side) {
  let root_id = buildRootId(merch_year, merch_type);

  let zoomMerch = document.getElementById(root_id + 'main-wrapper')
  let mainMerch = document.getElementById(root_id + 'main');
  let clickedMerch = document.getElementById(root_id + side + '');
  mainMerch.src = clickedMerch.src;
  zoomMerch.style.backgroundImage = "url('" + mainMerch.src + "')";
  sideStore = side;

  clickedMerch.classList.add('selected-merch-thumbnail');
  clickedMerch.classList.remove('non-selected-merch-thumbnail');
  if (side == 'front') {
    document.getElementById(root_id + 'back').classList.remove('selected-merch-thumbnail');
    document.getElementById(root_id + 'back').classList.add('non-selected-merch-thumbnail');
  }
  else {
    document.getElementById(root_id + 'front').classList.remove('selected-merch-thumbnail');
    document.getElementById(root_id + 'front').classList.add('non-selected-merch-thumbnail');
  }
}

//Credits: https://codepen.io/kennethknudsen/pen/eGQKZX
function zoom(e){
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX/zoomer.offsetWidth*100
  y = offsetY/zoomer.offsetHeight*100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}
