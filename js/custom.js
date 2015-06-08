$(document).ready(function() {
  $('.carousel').each(function(){
    $(this).carousel();

    var carousel = $(this).data('bs.carousel'); // or .data('carousel') in bootstrap 2
    carousel.pause();

    // At first, reverse the order of the items in the carousel because we're moving backwards
    $(this).find('> .carousel-inner > .item:not(:first-child)').each(function() {
      $(this).prependTo(this.parentNode);
    });

    // Override the bootstrap carousel prototype function, adding a different one won't work (it'll work only for the first slide)
    carousel.cycle = function (e) {
      if (!e) this.paused = false
      if (this.interval) clearInterval(this.interval);
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.prev, this), this.options.interval))
      return this;
    };

    carousel.cycle();
  });
  
  //Select All Checkboxes
  $('#all').click(function(e) {
    if(this.checked) {
      $('.check').each(function() {
        this.checked = true;          
      });
    }else{
      $('.check').each(function() {
        this.checked = false;               
      });         
    }
  });
  
  //Deselect the All checkbox
  $(".check").click(function () {
    if (!$(this).is(":checked")){
      $("#all").prop("checked", false);
    }else{
      var flag = 0;
      $(".check").each(function(){
        if(!this.checked)
          flag=1;
      })              
      if(flag == 0){ $("#all").prop("checked", true);}
    }
  });
  
});

$('.carousel-control').click(function(e) {
  e.preventDefault();
});

//Slide both the BG and the Phone carousels
function slideCarousels(ids, action) {
  var len = ids.length;
  var id = null;

  for (var i = 0; i < len; i++) {
    id = ids[i];
    $('#' + id).carousel({ slide: action });
  }
}

//Fixed Nav Animation on Scroll
$(window).scroll(function() {

  var wScroll = $(this).scrollTop();
  
  if(wScroll > $('.main').offset().top - 200) {
    $('.main-nav').addClass('scroll-nav');
    $('.nav-link').addClass('scroll-link');
  } else {
    $('.main-nav').removeClass('scroll-nav');
    $('.nav-link').removeClass('scroll-link');
  }
  
});