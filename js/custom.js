/* clients */
$(function () {
  $("#clients-list").owlCarousel({
    items: 5,
    smartSpeed: 700,
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
  });
});

/*Scroll down*/
$(function () {
  $("#nav-menu a").click(function (event) {
    event.preventDefault();
    let section = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - 64,
      },
      1300,
      "easeInOutExpo"
    );
  });
});

$(function () {
  new WOW().init();
});

$(".navbar a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

$(".content a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html,body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      800
    );
  }
});

/*contact */
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
