
// https://webdesign.tutsplus.com/tutorials/smooth-scrolling-vanilla-javascript--cms-35165  

//------------------Smooth Scrolling---------------------//


const links = document.querySelectorAll(".page-header ul a");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


$('.nav-link').on('click',function() {
  $('.navbar-collapse').collapse('hide');
});