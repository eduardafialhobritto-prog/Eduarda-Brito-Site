// Botão para alternar entre modo claro e escuro
const botaoTema = document.getElementById("botaoTema");
const iconeTema = document.getElementById("iconeTema");
const textoBotao = document.getElementById("textoBotao");

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        iconeTema.textContent = "☀";
        textoBotao.textContent = "Modo claro";
    } else {
        iconeTema.textContent = "☾";
        textoBotao.textContent = "Modo escuro";
    }
});
