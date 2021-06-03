let test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.style.backgroundColor = "#B8860B";
  event.target.style.borderRadius = "10px";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.backgroundColor = "";
    
  }, 500);
}, false);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.backgroundColor = "orange";
  event.target.style.borderRadius = "4px";

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.backgroundColor = "";
    event.target.style.borderRadius = "4px";
  }, 500);
}, false);



function mDown(obj) {
  obj.style.backgroundColor = "#7FFF00";
  obj.style.borderRadius = "10px";
 
}

function mUp(obj) {
  obj.style.backgroundColor="#18B3E3";
  obj.style.borderRadius = "4px";
  
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); }
  $(function(){
    var $select = $(".1-100");
    for (i=1;i<=100;i++){
        $select.append($('<option></option>').val(i).html(i))
    }
});


         

         
function myFunction() {
  document.getElementById("search").style.color = "white";
  document.getElementById("search").style.font = " 12px arial,serif";
}

function myCombo(){
  var x = "1000";
  document.getElementById("comboBox").innerHTML = x;
}
  

        


