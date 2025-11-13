function bla(){ /* Função */
    console.log("Olá amigos!")
}

b = document.querySelector("button:nth-child(4)"); /* B seria uma variável */
b.innerHTML="Clique em mim"
b.addEventListener("click", bla);

