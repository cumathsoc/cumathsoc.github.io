function creat_slideshow(event) {
    let html = "<div class='slideshow'>";
    html += "<h3><center>" + event.title + "</center></h3>";
    html += "<div class='slideshow-container'>";
    if ("img" in event) {
    event['img'].forEach((img, index) => {
        html += "<div class='mySlides fade'>";
        html += "<div class='numbertext'>" + (index + 1) + '/' +  event['img'].length + "</div>";
        html += "<img src = 'images/" + img + "'>";
        html += "</div>";
      });
    }
    html += "<a class='prev' onclick='plusSlides(-1)'>&#10094;</a>";
    html += "<a class='next' onclick='plusSlides(1)'>&#10095;</a>";
    html += "</div><br>";
    html += "<div style='text-align:center'>";
    for (let i = 0; i < event['img'].length; i++) {
      html += "<span class='dot' onclick='currentSlide(" + i + ")'></span>";
    }
    html += "</div>"
    html += "</div>";
    console.log(html);
    return html;
}


/**
 * Credits: https://www.w3docs.com/tools/code-editor/3720
 **/
let slideIndex = 0;
let timeoutId = null;
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

function currentSlide(index) {
     slideIndex = index;
     showSlides();
}
function plusSlides(step) {
  
  if(step < 0) {
      slideIndex -= 2;
      
      if(slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
  }
  
  showSlides();
}
function showSlides() {
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove('active');
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add('active');
/*  if(timeoutId) {
      clearTimeout(timeoutId);
   }
  timeoutId = setTimeout(showSlides, 20000); */// Change image every 5 seconds
}
