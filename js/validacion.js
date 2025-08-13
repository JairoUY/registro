function showAlertSuccess() {
  const alerta = document.getElementById("alert-success");
  alerta.classList.add("show");

  const cerrar = alerta.querySelector(".btn-close");

  cerrar.onclick = () => alerta.classList.remove("show");

  setTimeout(() => alerta.classList.remove("show"), 3000);
}

function showAlertError() {
  const alerta = document.getElementById("alert-danger");
  alerta.classList.add("show");

  const cerrar = alerta.querySelector(".btn-close");
  cerrar.onclick = function () {
    alerta.classList.remove("show");
  };
}

document.getElementById("regBtn").addEventListener("click", function () {
  let ps1 = document.getElementById("password1").value;
  let ps2 = document.getElementById("password2").value;
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let terminos = document.getElementById("terminos");
  let estaTerminos = terminos.checked;

  if (
    ps1 === ps2 &&
    nombre.length != 0 &&
    apellido.length != 0 &&
    email.length != 0 &&
    ps1.length >= 6 &&
    ps2.length >= 6 &&
    estaTerminos
  ) {
    showAlertSuccess();
  } else {
    showAlertError();
  }
});
