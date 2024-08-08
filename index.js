const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const tituloMensaje = document.getElementById("tituloMensaje");
const muneco = document.getElementById("muneco");
const rightInfo = document.getElementById("rightInfo");

// Ocultar el botón de copiar al inicio
botonCopiar.style.display = "none";

let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

const replace = (nuevoValor) => {
    ingresoTexto.value = "";
    tituloMensaje.innerHTML = nuevoValor;
    muneco.style.display = "none";
    rightInfo.style.display = "none";
    // Mostrar el botón de copiar cuando hay contenido
    botonCopiar.style.display = "block";
};

// BOTON ENCRIPTAR
botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function encriptar(newText) {
        for (let i = 0; i < remplazar.length; i++) {
            if (newText.includes(remplazar[i][0])) {
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
            }
        }
        return newText;
    }

    replace(encriptar(texto));
});

// BOTON DESENCRIPTAR
botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();

    function desencriptar(newText) {
        for (let i = 0; i < remplazar.length; i++) {
            if (newText.includes(remplazar[i][1])) {
                newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);
            }
        }
        return newText;
    }

    replace(desencriptar(texto));
});

// BOTON COPIAR
botonCopiar.addEventListener("click", () => {
    const texto = tituloMensaje.innerText || tituloMensaje.textContent;
    navigator.clipboard.writeText(texto).then(() => {
        // alert("Texto copiado");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });

    tituloMensaje.innerHTML = "";
    muneco.style.display = "block";
    rightInfo.style.display = "block";
    botonCopiar.style.display = "none"; // Ocultar el botón de copiar nuevamente
    ingresoTexto.focus();
});

