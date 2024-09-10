export default function RankingPage() {
    // Dados fictícios para o ranking
    const ranking = [
      { posicao: 1, nome: "Jogador A", pontos: 150 },
      { posicao: 2, nome: "Jogador B", pontos: 130 },
      { posicao: 3, nome: "Jogador C", pontos: 120 },
      { posicao: 4, nome: "Jogador D", pontos: 100 },
      { posicao: 5, nome: "Jogador E", pontos: 90 },
    ];
  
    return (
      <div>
        <h1>Ranking do App</h1>
        <ul>
          {ranking.map((jogador) => (
            <li key={jogador.posicao}>
              {jogador.posicao}º - {jogador.nome}: {jogador.pontos} PL
            </li>
          ))}
        </ul>
      </div>
    );
  }  