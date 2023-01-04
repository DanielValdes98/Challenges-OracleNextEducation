function encriptar() {
    var texto = document.getElementById('texto').value;
    texto = texto.toLowerCase();
    texto = removeAccents(texto);

    let nuevoTexto = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    // let nuevoTexto = texto.replace(/a/gi,'ai')
    //                 .replaceAll('e','enter')
    //                 .replaceAll('i','imes')
    //                 .replaceAll('o','ober')
    //                 .replaceAll('u','ufat');
    document.getElementById('notTexto').value = nuevoTexto;
}

function desencriptar() {
    var texto = document.getElementById('texto').value;
    texto = texto.toLowerCase();
    texto = removeAccents(texto);

    let nuevoTexto = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    
    // let nuevoTexto = texto.replaceAll('ai','a')
    //                 .replaceAll('enter','e')
    //                 .replaceAll('imes','i')
    //                 .replaceAll('ober','o')
    //                 .replaceAll('ufat','u')
    document.getElementById('notTexto').value = nuevoTexto;
}


const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

function copy() {
    let copyText = document.querySelector("#notTexto");
    copyText.select();
    document.execCommand("copy");
}

document.querySelector("#copiar").addEventListener("click", copy);
