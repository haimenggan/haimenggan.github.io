'use strict';

console.log('Hi, I\'m Haimeng Gan. Welcome to my portfolio site!');

$(function () {
  $(window).scroll(function () {
    var position = $(document).scrollTop();

    // for the header
    if (position > 100) {
      $('.menu--ama').addClass('-collapse');
    } else {
      $('.menu--ama').removeClass('-collapse');
    }

    // for the home banner
    var areaHeight = $('.flying-bg').outerHeight();
    if (position < areaHeight) {
      var ratio = position / areaHeight;
      animationEndState.forEach(function (data, index) {
        var selector = '.shape-' + (index + 1);
        $(selector).css({
          'transform': 'translate(' + data.x * ratio + '%, ' + data.y * ratio + '%) scale(' + ((data.scale - 1) * ratio + 1) + ') rotate(' + data.rotate * ratio + 'deg)',
          'opacity': 1 - ratio
        });
      });
    }
  });

  // photo project tabs
  $('#ideation .tab').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('#ideation .tab-content').hide();
    $('#ideation .tab-content-' + $(this).attr('data-tab')).show();
  });
  $('#competitor .tab').click(function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $('#competitor .tab-content').hide();
    $('#competitor .tab-content-' + $(this).attr('data-tab')).show();
  });

  // co-signer project - steps carousel
  if ($('.js-step-button').length) {
    var switchVideo = function switchVideo(i) {
      var index = parseInt(i);
      if (stepVideoTimer) {
        clearTimeout(stepVideoTimer);
      }
      $('.js-step-button').removeClass('-active');
      $('.step-video').removeClass('-active');
      $('.js-step-button[data-step=' + index + ']').addClass('-active');
      $('.step-video[data-step=' + index + ']').addClass('-active');
      $('.step-video[data-step=' + index + ']')[0].load();
      $('.step-video[data-step=' + index + ']')[0].play();
      var next = index + 1;
      if (next >= 4) next = 1;
      stepVideoTimer = setTimeout(function () {
        switchVideo(next);
      }, videoLength[index] * 1000);
    };

    var videoLength = [undefined, 14, 24, 18]; // index start from 1
    var stepVideoTimer;
    $('.js-step-button').click(function (e) {
      var index = e.currentTarget.dataset.step;
      switchVideo(index);
    });

    switchVideo(1);
  }

  // images view
  $('.js-img-preview').click(function (e) {
    var imageURL = $(e.target).attr('src');
    $('.image-preview-container .image').css('background-image', 'url(' + imageURL + ')');
    $('.image-preview-container').fadeIn(200);
  });
  $('.image-preview-container').click(function (e) {
    $('.image-preview-container').fadeOut(500);
  });
});

var animationEndState = [{ x: -110, y: -200, scale: 3, rotate: 80 }, { x: 140, y: -200, scale: 3, rotate: 60 }, { x: -200, y: 300, scale: 3, rotate: -60 }, { x: 110, y: 200, scale: 3, rotate: 0 }, { x: -510, y: -300, scale: 2, rotate: 0 }, { x: -310, y: 0, scale: 2, rotate: 80 }, { x: 710, y: 200, scale: 2, rotate: -100 }, { x: 310, y: -100, scale: 2, rotate: -100 }];
//# sourceMappingURL=scripts.js.map


// // for Slideshow
// var slideIndex = 0;
// showSlides();
//
// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
// var animationEndState = [{ x: -110, y: -200, scale: 3, rotate: 80 }, { x: 140, y: -200, scale: 3, rotate: 60 }, { x: -200, y: 300, scale: 3, rotate: -60 }, { x: 110, y: 200, scale: 3, rotate: 0 }, { x: -510, y: -300, scale: 2, rotate: 0 }, { x: -310, y: 0, scale: 2, rotate: 80 }, { x: 710, y: 200, scale: 2, rotate: -100 }, { x: 310, y: -100, scale: 2, rotate: -100 }];
// //# sourceMappingURL=scripts.js.map


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
