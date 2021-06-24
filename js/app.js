var initialTopOffset = $('#hero').offset().top;
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // if the top of our browser is inside the section2
    if (scroll + initialTopOffset >= $('#about').offset().top && scroll + initialTopOffset <= $('#about').offset().top + $('#about').outerHeight()) {
        $('.btn-resume').addClass('btn-resume2'); // add the class
    } else {
        $('.btn-resume').removeClass('btn-resume2'); // remove the class
    }

});

//trigger the scroll
$(window).scroll(); //ensure if you're in current position when page is refreshed

$(function () { 
    $(".toggle").click(function () {
        $(".fas").toggleClass("js-close"); 
    });
});