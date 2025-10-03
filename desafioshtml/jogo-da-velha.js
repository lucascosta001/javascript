// jogo da velha
function startGame() {
    const jogadorAtual = document.getElementById('jogador-atual');
    jogadorAtual.textContent = `começa com o Jogador 1 (X)`;
    jogar();
}

function resetGame() {
    const jogadorAtual = document.getElementById('jogador-atual');
    jogadorAtual.textContent = `começa com o Jogador 1 (X)`;
    // Limpar o tabuleiro
    const tabuleiro = document.getElementById('tabuleiro');
    tabuleiro.innerHTML = '';
    // Reiniciar variáveis
    jogador1 = true;
    jogadas = 0;
    ganhador = 0;
}
function jogar() {
    const tabuleiro = document.getElementById('tabuleiro');
    const jogadorAtual = document.getElementById('jogador-atual');
    let jogador1 = true;
    let jogadas = 0;
    let ganhador = 0;
    // Criar o tabuleiro
    for (let i = 0; i < 3; i++) {
        const linha = document.createElement('div');
        linha.classList.add('linha');
        for (let j = 0; j < 3; j++) {
            const celula = document.createElement('div');
            celula.classList.add('celula');
            celula.addEventListener('click', () => {
                if (celula.textContent === '' && ganhador === 0) {
                    celula.textContent = jogador1 ? 'X' : 'O';
                    jogadas++;
                    // Verificar ganhador
                    if (verificarGanhador()) {
                        ganhador = jogador1 ? 1 : 2;
                        jogadorAtual.textContent = `Jogador ${ganhador} venceu!`;
                    }
                    else if (jogadas === 9) {
                        jogadorAtual.textContent = 'Empate!';
                    }
                    else {
                        jogador1 = !jogador1;
                        jogadorAtual.textContent = `É a vez do Jogador ${jogador1 ? '1 (X)' : '2 (O)'}`;
                    }
                }
            });
            linha.appendChild(celula);
        }
        tabuleiro.appendChild(linha);
    }
    function verificarGanhador() {
        const celulas = document.querySelectorAll('.celula');
        const combinacoes = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
            [0, 4, 8], [2, 4, 6]             // Diagonais
        ];
        for (const combinacao of combinacoes) {
            const [a, b, c] = combinacao;
            if (celulas[a].textContent && celulas[a].textContent === celulas[b].textContent && celulas[a].textContent === celulas[c].textContent) {
                return celulas[a].textContent === 'X' ? 1 : 2;
            }
        }
        return 0;
    }
}
// Iniciar o jogo ao carregar a página
window.onload = startGame;