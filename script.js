$(document).ready(function(){
    $('.slider').slick({
      autoplay:true,
      easing:'ease',
      speed:3000,
      autoplaySpeed:5000,
      // variableWidth: true,
      appendArrows:$('.why_right'),
    });
  });
 /*            --------------------------                */

$('.slider_prod').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  adaptiveHeight: true
});

$('.slider-dots .slider-dots__item').click(function() {
  var $this = $(this);
  $('.slider_prod').slick('slickGoTo', $this.data('index'))
});


/*qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq*/
const quizParent = document.querySelector('.var_field'),
      quizItem = document.querySelectorAll('#var');


 
     quizItem.forEach(item=>{
      const res =item.getElementsById('var').value
         
        console.log(res)
      
     })

      