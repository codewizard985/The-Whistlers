var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter = 1;
  }
}, 5000);

function nonfonctionnel(){
  alert('Bouton non fonctionnel');
}
$.js = function (el) {
  return $('[data-js=' + el + ']')
};

function carousel() {
$.js('timeline-carousel').slick({
  infinite: false,
  arrows: false,
  dots: true,
  autoplay: false,
  speed: 1100,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
});
}

carousel();
