function cambiarModo() {
  let tema = document.getElementById("tema");
  let imgBtn = document.getElementById("img-btn");
  let imgCod = document.getElementById("img-cod");
  let imgSobreMi = document.getElementById("img-sobreMi");
  let imgEstudios = document.getElementById("img-estudios");
  let imgSkils = document.getElementById("img-skils");
  let imgProyectos = document.getElementById("img-proyectos");
  let imgContacto = document.getElementById("img-contacto");
  let imgLinkedin = document.getElementById("img-linkedin");
  let imgGithub = document.getElementById("img-github");
  let imgWhatsapp = document.getElementById("img-whatsapp");
  let imgCv = document.getElementById("img-cv");
  let imgCertificados = document.getElementById("img-certificados");
  let imgMovil = document.getElementById("img-movil");
  let imgMail = document.getElementById("img-mail");

  if (tema.getAttribute("href") == "css/modo-dia.css") {
    tema.href = "css/modo-noche.css";
    imgBtn.setAttribute("src", "img/light.png");
    imgCod.setAttribute("src", "img/codigo-b.png");
    imgSobreMi.setAttribute("src", "img/sobre-mi-b.png")
    imgEstudios.setAttribute("src", "img/estudios-b.png")
    imgSkils.setAttribute("src", "img/skils-b.png")
    imgProyectos.setAttribute("src", "img/proyectos-b.png")
    imgContacto.setAttribute("src", "img/contacto-b.png")
    imgLinkedin.setAttribute("src", "img/linkedin-b.png")
    imgGithub.setAttribute("src", "img/github-b.png")
    imgWhatsapp.setAttribute("src", "img/whatsapp-b.png")
    imgCv.setAttribute("src", "img/cv-b.png")
    imgCertificados.setAttribute("src", "img/certificado-b.png")
    imgMovil.setAttribute("src", "img/movil-b.png")
    imgMail.setAttribute("src", "img/email-b.png")
  } else {
    tema.href = "css/modo-dia.css";
    imgBtn.setAttribute("src", "img/dark.png");
    imgCod.setAttribute("src", "img/codigo.png");
    imgSobreMi.setAttribute("src", "img/sobre-mi.png")
    imgEstudios.setAttribute("src", "img/estudios.png")
    imgSkils.setAttribute("src", "img/skils.png")
    imgProyectos.setAttribute("src", "img/proyectos.png")
    imgContacto.setAttribute("src", "img/contacto.png")
    imgLinkedin.setAttribute("src", "img/linkedin.png")
    imgGithub.setAttribute("src", "img/github.png")
    imgWhatsapp.setAttribute("src", "img/whatsapp.png")
    imgCv.setAttribute("src", "img/cv.png")
    imgCertificados.setAttribute("src", "img/certificado.png")
    imgMovil.setAttribute("src", "img/movil.png")
    imgMail.setAttribute("src", "img/email.png")
  }
}