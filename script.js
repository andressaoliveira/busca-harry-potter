let url = "https://hp-api.onrender.com/api/characters"
let personagens;

fetch(url)
    .then(response => response.json())
    .then(response => personagens = response)

function buscarPersonagem() {
    let texto = document.getElementById("digitado")

    personagens.forEach(personagem => {
        if (personagem.name.toUpperCase() === texto.value.toUpperCase()) {
            resultado = personagem
        }
    });

    console.log(resultado)
}
