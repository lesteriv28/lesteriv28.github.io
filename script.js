$(document).ready(function() {
    // when the "Quienes somos" link is clicked
    $("#nav-qss").click(function(event) {
      // prevent the default action of the link
      event.preventDefault();
      // move the bienvenidos section down by the height of the navigation bar
      var navbarHeight = $("#navbar").height();
      $("#bienvenidos").css("padding-top", navbarHeight + "px");
    });
  });
  