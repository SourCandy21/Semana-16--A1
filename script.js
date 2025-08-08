document.addEventListener("DOMContentLoaded", () => {
  const titulo = document.getElementById("titulo");
  const textoTitulo = "Bem-vindo de volta!";
  let index = 0;

  function digitar() {
    if (index < textoTitulo.length) {
      titulo.textContent += textoTitulo.charAt(index);
      index++;
      setTimeout(digitar, 100);
    }
  }
  digitar();

  // Animações de entrada GSAP
  gsap.to("form input, #entrar", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2
  });

  gsap.from(".logo", { scale: 0, duration: 1, ease: "elastic.out(1, 0.5)" });

  const button = document.querySelector("#entrar");
  const usuario = document.getElementById("usuario");
  const senha = document.getElementById("senha");

  button.onclick = function (event) {
    event.preventDefault();

    if (usuario.value === "" || senha.value === "") {
      gsap.fromTo("input", { x: -5 }, { x: 5, duration: 0.1, repeat: 5, yoyo: true });
      return;
    }

    button.textContent = "Carregando...";
    button.classList.add("loading");

    setTimeout(() => {
      button.textContent = "Entrar";
      button.classList.remove("loading");
    }, 3000);
  };

  // Pulsação no hover
  button.onmouseover = () => {
    gsap.to(button, {
      scale: 1.1,
      duration: 0.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
  };

  button.onmouseout = () => {
    gsap.to(button, { scale: 1, duration: 0.2 });
  };
});
