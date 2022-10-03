function cambiarModo() {
  let tema = document.getElementById("tema");
  let imgBtn = document.getElementById("img-btn");

  if (tema.getAttribute("href") == "css/modo-dia.css") {
    tema.href = "css/modo-noche.css";
    imgBtn.setAttribute("src", "img/light.png");

  } else {
    tema.href = "css/modo-dia.css";
    imgBtn.setAttribute("src", "img/dark.png");
  }
}