//Implementação das funcionalidades exigidas no desafio
// Por: Adilma Alves 16/08/2025
// Array para armazenar os nomes

let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação do campo vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome no array
    amigos.push(nome);

    // Atualiza a lista na tela
    atualizarLista();

    // Limpa o campo de texto
    input.value = "";
}

// Função para atualizar a lista exibida
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
