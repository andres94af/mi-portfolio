function cambiarModo() {
  let theme = document.getElementById("tema");
  let textoBtn = document.getElementById("txt-btn");

  if (theme.getAttribute("href") == "css/modo-dia.css") {
    theme.href = "css/modo-noche.css";
    textoBtn.textContent = "Light";
  } else {
    theme.href = "css/modo-dia.css";
    textoBtn.textContent = "Dark";
  }
}