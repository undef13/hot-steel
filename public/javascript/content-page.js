// Scroll Shadow
$(window).scroll(function () {
  $("nav").toggleClass("shadow", $(this).scrollTop() > 5);
});

// Gallery
function switchStyle() {
  if (document.getElementById("styleSwitch").checked) {
    document.getElementById("gallery").classList.add("custom");
    document.getElementById("modal").classList.add("custom");
  } else {
    document.getElementById("gallery").classList.remove("custom");
    document.getElementById("modal").classList.remove("custom");
  }
}
