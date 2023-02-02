const myImagem = document.querySelector("img");

myImagem.onclick = () => {
    const mySrc = myImagem.getAttribute("src");
    if (mySrc === "imagens/books.png") {
        myImagem.setAttribute("src", "imagens/books1.png");
    } else {
        myImagem.setAttribute("src", "imagens/books.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Por favor, digite seu nome");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Olá, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storeName = localStorage.getItem("name");
    myHeading.textContent = `Olá, ${storeName}`;
}

myButton.onclick = () => {
    setUserName();
}




