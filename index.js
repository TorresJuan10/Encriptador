const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const tituloMensaje = document.getElementById("tituloMensaje");
const muneco = document.getElementById("muneco");
const rightInfo = document.getElementById("rightInfo");




/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

const replace = (nuevoValor) => {

    ingresoTexto.value="";
    tituloMensaje.innerHTML = nuevoValor;
    muneco.style.display = "none";
    rightInfo.style.display = "none";
}


//BOTON ENCRIPTAR
botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    function encriptar(newText) {
        for (let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][0])){
                newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);
            };
        };
        return newText
    }

    // const textoEncriptado = encriptar(texto)

    replace(encriptar(texto));
    //tituloMensaje.innerHTML = encriptar(texto);
}); 
//BOTON DESENCRIPTAR
botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();

    function desencriptar(newText) {
        for(let i = 0; i < remplazar.length; i++){
            if (newText.includes(remplazar[i][1])) {
                newText = newText.replaceAll(remplazar[i][1],
                remplazar[i][0]);
            };
        };
        return newText
    }
    const textoDesencriptado = desencriptar(texto); 
    replace(desencriptar(texto));

   
});

//BOTON COPIAR

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
    botonCopiar.style.display = "none";
    ingresoTexto.focus();
});

