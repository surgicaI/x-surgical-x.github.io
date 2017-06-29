$(document).ready(function() {
    $('<img/>').attr('src', 'images/background-1.jpg').on('load', function() {
        initLoadAnimations();
    });
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
