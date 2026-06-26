 const botonArriba = document.getElementById("btn-arriba");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 350) {
      botonArriba.classList.add("visible");
    } else {
      botonArriba.classList.remove("visible");
    }
  });

  botonArriba.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
	// JavaScript Document