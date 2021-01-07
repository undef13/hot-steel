$(document).on("click", "a.nav-link", function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - 100,
    },
    1000
  );
});
