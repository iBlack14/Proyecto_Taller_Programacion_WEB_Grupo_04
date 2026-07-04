const formulario = document.getElementById("formContacto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const motivo = document.getElementById("motivo");
const mensaje = document.getElementById("mensaje");
const mensajeExito = document.getElementById("mensajeExito");


formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    limpiarErrores();
    let valido = true;

    if (nombre.value.trim() === "") {
        mostrarError(nombre, "Ingrese su nombre.");
        valido = false;

    } else if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/.test(nombre.value.trim())) {
        mostrarError(nombre, "Solo letras y mínimo 3 caracteres.");
        valido = false;
    }

    const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (correo.value.trim() === "") {
        mostrarError(correo, "Ingrese su correo.");
        valido = false;
    } else if (!patronCorreo.test(correo.value.trim())) {
        mostrarError(correo, "Correo electrónico inválido.");
        valido = false;
    }

    const patronTelefono = /^9\d{8}$/;
    if (telefono.value.trim() === "") {
        mostrarError(telefono, "Ingrese su teléfono.");
        valido = false;

    } else if (!patronTelefono.test(telefono.value.trim())) {
        mostrarError(telefono, "Debe contener 9 dígitos y comenzar con 9.");
        valido = false;
    }

    if (motivo.value === "") {
        mostrarError(motivo, "Seleccione un motivo.");
        valido = false;
    }

    if (mensaje.value.trim() === "") {
        mostrarError(mensaje, "Escriba un mensaje.");
        valido = false;

    } else if (mensaje.value.trim().length < 15) {
        mostrarError(mensaje, "El mensaje debe tener mínimo 15 caracteres.");
        valido = false;
    }

    if (valido) {
        guardarDatos();
        mensajeExito.textContent =
            "Gracias por contactarnos. Tu mensaje fue enviado correctamente.";
        formulario.reset();
    }
});

function mostrarError(input, mensaje){
    const error = input.parentElement.querySelector(".error");
    error.textContent = mensaje;
}

function limpiarErrores(){
    document.querySelectorAll(".error").forEach(error => {
        error.textContent = "";
    });
    mensajeExito.textContent = "";
}

function guardarDatos(){
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("correo", correo.value);
    localStorage.setItem("telefono", telefono.value);
}

window.addEventListener("DOMContentLoaded", () => {
    nombre.value = localStorage.getItem("nombre") || "";
    correo.value = localStorage.getItem("correo") || "";
    telefono.value = localStorage.getItem("telefono") || "";
});


nombre.addEventListener("input", () => {
    localStorage.setItem("nombre", nombre.value);
});

correo.addEventListener("input", () => {
    localStorage.setItem("correo", correo.value);
});

telefono.addEventListener("input", () => {
    telefono.value = telefono.value.replace(/\D/g, "");
    localStorage.setItem("telefono", telefono.value);
});