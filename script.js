let url = "https://hp-api.onrender.com/api/characters"
let personagens;
let resultado;

fetch(url)
    .then(response => response.json())
    .then(response => {
        personagens = response;
        console.log("personagens: ", personagens)
    })

function buscarPersonagem() {
    resultado = [];
    let texto = document.getElementById("digitado")

    personagens.forEach(personagem => {
        let nome = personagem.name.toUpperCase();
        let valor = texto.value.toUpperCase();

        if (nome.includes(valor)) {
            resultado.push(personagem)
        }
    });

    console.log("resultado: ", resultado)
}
