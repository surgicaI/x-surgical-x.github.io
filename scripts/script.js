$(document).ready(function() {
    $('<img/>').attr('src', 'images/background-1.jpg').on('load', function() {
        initLoadAnimations();
    });
    $('<img/>').attr('src', 'images/background-2.jpg').on('load', function() {
        initLoadAnimationsPage2();
    });
    loadSmoothScroll();
    addYear();
});

$(window).resize(function(event) {
    var greeting_top = $("#hello").offset().top;
    var name_top = greeting_top + $("#hello").height();
    $("#name").css('top', name_top);

    padding_right = 50;
    var width = $("#name").find('span:first').width() + padding_right;
    var location = $(window).width() - width;
    $("#name").css('left', location);
});

function initLoadAnimations(){
    $("#hello").animate({
        opacity: 1},
        2000, function() {
            $(this).css('height', $("#inner-hello").height());
            var greeting_top = $(this).offset().top;
            var name_top = greeting_top + $(this).height();
            $("#name").css('top', name_top);
            $('.type-it').typeIt({
                lifeLike: false,
                cursor: false,
                speed: 90,
                strings: ["I'm "],
                callback: function(){
                    padding_right = 50;
                    var width = $("#name").find('span:first').width();
                    width = width + padding_right;
                    $("#name").width(width);
                    var location = $(window).width() - width;
                    $("#name").animate({'left': location}, 1000, function(){
                        $(".scroll").css('animation-play-state', 'running');
                    });
                }
            }).tiPause(400)
            .tiType("Simranjyot ")
            .tiPause(400)
            .tiType("Singh ")
            .tiPause(400)
            .tiType("Gill");
    });
    $(".cover").animate({opacity:1}, 500);
    $(".nav-bar").animate({opacity:1}, 500);
}

function initLoadAnimationsPage2(){

    $(".cover-2").animate({
        opacity: 1},
        500, function() {
        /* stuff to do after animation is complete */
    });
}

function loadSmoothScroll(){
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
}

function addYear(){
    year = new Date().getFullYear();
    $(".copyright-notice").html("&copy; "+ year +". All Rights Reserved");
}

// $(function(){
//     jQuery('img.svg').each(function(){
//         var $img = jQuery(this);
//         var imgID = $img.attr('id');
//         var imgClass = $img.attr('class');
//         var imgURL = $img.attr('src');
    
//         jQuery.get(imgURL, function(data) {
//             // Get the SVG tag, ignore the rest
//             var $svg = jQuery(data).find('svg');
    
//             // Add replaced image's ID to the new SVG
//             if(typeof imgID !== 'undefined') {
//                 $svg = $svg.attr('id', imgID);
//             }
//             // Add replaced image's classes to the new SVG
//             if(typeof imgClass !== 'undefined') {
//                 $svg = $svg.attr('class', imgClass+' replaced-svg');
//             }
    
//             // Remove any invalid XML tags as per http://validator.w3.org
//             $svg = $svg.removeAttr('xmlns:a');
            
//             // Check if the viewport is set, else we gonna set it if we can.
//             if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
//                 $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
//             }
    
//             // Replace image with new SVG
//             $img.replaceWith($svg);
    
//         }, 'xml');
    
//     });
// });

