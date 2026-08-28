// Banco de dados de curiosidades rápidas
const curiosidades = [
    "A música 'Bohemian Rhapsody' do Queen levou 3 semanas para ser gravada na época!",
    "Ouvir música alta enquanto se exercita pode aumentar seu rendimento físico em até 15%.",
    "A canção mais antiga gravada no mundo chama-se 'Hino Hurrita nº 6' e foi gravada em placas de argila.",
    "O som das plantas não existe, mas cientistas já criaram sintetizadores que convertem sinais elétricos delas em música!",
    "Espaço sideral: Astronautas já levaram violões para a Estação Espacial Internacional para tocar em gravidade zero."
];

const textoCuriosidade = document.getElementById('curiosidade-texto');
const btnCuriosidade = document.getElementById('btn-curiosidade');

// Evento ao clicar no botão
btnCuriosidade.addEventListener('click', () => {
    // Escolhe uma frase aleatória
    const indiceAleatorio = Math.floor(Math.random() * curiosidades.length);
    
    // Altera o texto na tela
    textoCuriosidade.textContent = `"${curiosidades[indiceAleatorio]}"`;
});

// Seleciona todos os cartões e adiciona o evento de clique
const cartoes = document.querySelectorAll('.cartao');

cartoes.forEach(cartao => {
    cartao.addEventListener('click', () => {
        cartao.classList.toggle('virado');
    });
});
