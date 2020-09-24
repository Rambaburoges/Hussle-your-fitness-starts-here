

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

/*Scroll down*/
$(function () {
    $('#nav-menu a').click(function (event) {
        event.preventDefault();
        let section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1300, "easeInOutExpo");
    })
});

