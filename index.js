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



    const textoEncriptado = encriptar(texto)


    tituloMensaje.innerHTML = textoEncriptado
    muneco.style.display = "none";
    rightInfo.style.display = "none";
   
});

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
    
    tituloMensaje.innerHTML = textoDesencriptado;
})