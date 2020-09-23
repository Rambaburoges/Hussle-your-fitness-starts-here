/*navigation css */

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            console.log("if");
            $('nav').addClass('obrn-nav');
        } else {
            $('nav').removeClass('obrn-nav');
        }
    });
});



/* clients */
$(function () {
    $('#clients-list').owlCarousel({
        items: 5,
        smartSpeed: 700,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
    });
});
