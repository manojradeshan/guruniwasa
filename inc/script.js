$(document).ready(function () {
  $(".carousel-wrapper").owlCarousel({
    items: 3, // Number of items shown in the carousel at once
    loop: true, // Enable looping of carousel items
    autoplay: true, // Enable autoplay
    autoplayTimeout: 3000, // Autoplay interval in milliseconds (3 seconds in this case)
    autoplayHoverPause: true, // Pause autoplay when hovering over the carousel
    // Add any other Owl Carousel options you need here
  });
});

$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [3000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});
