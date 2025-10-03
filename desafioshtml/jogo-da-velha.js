// jogo da velha

function startGame() {
    const jogadorAtual = document.getElementById('jogador-atual');
    jogadorAtual.textContent = "começa com o Jogador 1 (X)";
}















function jogar(celula) {
    const tab = document.getElementById('tabuleiro');
    const cel = tab.getElementsByClassName('celula');
    const jogadorAtual = document.getElementById('jogador-atual');
    let jogador1 = true; // jogador 1 com X e jogador 2 com O
    
    let tabuleiro = [
        [ '*' , '*' , '*' ], 
        [ '*' , '*' , '*' ], 
        [ '*' , '*' , '*' ]
    ];
    let jogadas = 0;
    let ganhador = 0;
    let linha, coluna;

    while (jogadas <= 9) {
        cout << "Jogador " << (jogador1 ? 1 : 2) << ", digite a posicao, ex: 1-3 (linha e coluna): ";
        cin >> linha >> coluna;
        linha--; // Ajusta para índice 0
        coluna--; // Ajusta para índice 0

        // Verifica se a posição é válida
        if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2 || tabuleiro[linha][coluna] == 'X' || tabuleiro[linha][coluna] == 'O') {
            cout << "Posicao invalida. Tente novamente." << "\n";
            continue;
        }
        tabuleiro[linha][coluna] = jogador1 ? 'X' : 'O';
        for (let i = 0; i < 3; i++){// imprime o mapa
            for (let j = 0; j < 3; j++){
                if (j != 1) { // para deixar a saida mais bonita
                    cout << tabuleiro[i][j];
                }
                if (j == 1) { // para deixar a saida mais bonita
                    cout << " | " << tabuleiro[i][j] << " | ";
                }
                
                // Verifica linhas, colunas e diagonais
                if (tabuleiro[i][j]==tabuleiro[i][j+1] && tabuleiro[i][j+1]==tabuleiro[i][j+2] 
                    || tabuleiro[i][j]==tabuleiro[i+1][j] && tabuleiro[i+1][j]==tabuleiro[i+2][j] 
                    || tabuleiro[i][j]==tabuleiro[i+1][j+1] && tabuleiro[i+1][j+1]==tabuleiro[i+2][j+2]){
                    if (tabuleiro[i][j] == 'X') {
                        ganhador = 1;
                    } else if (tabuleiro[i][j] == 'O') {
                        ganhador = 2;
                    }
                }
            }
            if (i != 2){ // para deixar a saida mais bonita
                cout << "\n----------\n";
            }
            if (i == 2){ // para deixar a saida mais bonita
                cout << "\n";
            }
        }
        if (ganhador != 0) { // Verifica se alguém ganhou
            cout << "Jogador " << ganhador << " ganhou!" << "\n";
            break;
        }
        jogador1 = !jogador1; // Troca de jogador
        jogadas++; // Incrementa o número de jogadas, para limitar a 9 jogadas
    }
}