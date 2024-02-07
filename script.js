// Elements
const btnEncrypt = document.getElementById("btnEncrypt");
const btnDecrypt = document.getElementById("btnDecrypt");
const textInput = document.getElementById("textInput");
const textOutput = document.getElementById("textOutput");
const btnCopy = document.getElementById("btnCopy");

const imgSection = document.getElementsByClassName("img-second-section");
const textSection = document.getElementsByClassName("text-output-section");
textSection[0].classList.add("hidden");

// Functions
/**
 * Validate text input
 * Remove accents and special characters
 * Convert to lowercase
 */
function validateTextInput() {
  let textInput = document.getElementById("textInput");
  textInput.value = textInput.value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/gi, "")
    .toLowerCase();
}

function encrypt() {
  // get text in textInput
  let text = textInput.value;
  let cipherText = "";
  if (text === "" || text === null) {
    alert("Please enter a message to encrypt");
  } else {
    // encrypt text
    cipherText = cifrarTexto(text);
    console.log("Encrypting... " + cipherText);
    textOutput.value = cipherText;
    // agregar la clase hidden a la sección de imágenes
    imgSection[0].classList.add("hidden");
    // remover la clase hidden a la sección de texto
    textSection[0].classList.remove("hidden");
  }
}

function decrypt() {
  let text = textInput.value;
  let cipherText = "";
  if (text === "" || text === null) {
    alert("Please enter a message to decrypt");
  } else {
    // encrypt text
    cipherText = descifrarTexto(text);
    console.log("Decrypting... " + cipherText);
    textOutput.value = cipherText;
    // agregar la clase hidden a la sección de imágenes
    imgSection[0].classList.add("hidden");
    // remover la clase hidden a la sección de texto
    textSection[0].classList.remove("hidden");
  }
}

function cifrarTexto(texto) {
  const reglasCifrado = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  const textoCifrado = texto.replace(
    /[eiaou]/g,
    (match) => reglasCifrado[match] || match
  );
  return textoCifrado;
}

function descifrarTexto(textoCifrado) {
  const reglasDescifrado = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  const textoDescifrado = textoCifrado.replace(
    /(enter|imes|ai|ober|ufat)/g,
    (match) => reglasDescifrado[match] || match
  );
  return textoDescifrado;
}

/**
 * Copy text from textOutput to textInput
 */
function copyText() {
  textInput.value = textOutput.value;
  textOutput.value = "";
  // agregar la clase hidden a la sección de imágenes
  imgSection[0].classList.remove("hidden");
  // remover la clase hidden a la sección de texto
  textSection[0].classList.add("hidden");
}

// Event Listeners
btnEncrypt.addEventListener("click", encrypt);
btnDecrypt.addEventListener("click", decrypt);
btnCopy.addEventListener("click", copyText);
