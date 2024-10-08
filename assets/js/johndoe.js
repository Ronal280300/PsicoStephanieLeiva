// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// protfolio filters
$(window).on("load", function () {
  var t = $(".portfolio-container");
  t.isotope({
    filter: ".new",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: !1,
    },
  }),
    $(".filters a").click(function () {
      $(".filters .active").removeClass("active"), $(this).addClass("active");
      var i = $(this).attr("data-filter");
      return (
        t.isotope({
          filter: i,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1,
          },
        }),
        !1
      );
    });
});

$(document).ready(function () {
  $(".accordion-header").click(function () {
    var parentItem = $(this).parent();

    // Cerrar cualquier otro acordeón abierto
    $(".accordion-item")
      .not(parentItem)
      .removeClass("active")
      .find(".accordion-content")
      .slideUp();
    $(".accordion-item").not(parentItem).find(".accordion-icon").text("+");

    // Abrir/cerrar el acordeón actual
    if (parentItem.hasClass("active")) {
      parentItem.removeClass("active").find(".accordion-content").slideUp();
      $(this).find(".accordion-icon").text("+");
    } else {
      parentItem.addClass("active").find(".accordion-content").slideDown({
        duration: 500,
        easing: "swing",
      });
      $(this).find(".accordion-icon").text("×");
    }
  });
});
