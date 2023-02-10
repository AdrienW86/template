window.onscroll = function() {
    var element = document.getElementById("services__title");
    var position = element.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;
  
    if (position < screenHeight) {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }
  };