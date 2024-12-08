import axios from 'axios';

const API_URL_LIVROS = 'https://gutendex.com/books';

/**
 * Busca os livros da API e organiza os dados.
 * - Retorna os três livros mais bem avaliados.
 * - Retorna os livros organizados por gênero.
 */
export const fetchLivrosOrganizados = async () => {
  try {
    const response = await axios.get(API_URL_LIVROS);
    const livros = response.data.results;

    // Selecionar os três primeiros livros como os mais bem avaliados
    const leiturasAvaliadas = livros.slice(0, 3);

    // Organizar livros por gênero
    const livrosPorGenero: { [key: string]: any[] } = livros.reduce((acc, livro) => {
      const genero = livro.subjects?.[0] || 'Gênero Desconhecido'; // Primeiro gênero ou "Desconhecido"
      if (!acc[genero]) acc[genero] = [];
      acc[genero].push(livro);
      return acc;
    }, {});

    return { leiturasAvaliadas, livrosPorGenero };
  } catch (error) {
    console.error('Erro ao carregar livros:', error);
    throw error;
  }
};

/**
 * Função para abrir o livro em uma nova aba.
 * - Tenta abrir o PDF se disponível.
 * - Caso contrário, tenta abrir a página HTML.
 */
export const abrirLivro = (formats: any) => {
  const pdfUrl = formats["application/pdf"];
  const htmlUrl = formats["text/html; charset=utf-8"] || formats["text/html"];

  if (pdfUrl) {
    window.open(pdfUrl, '_blank'); // Abre o PDF em uma nova aba
  } else if (htmlUrl) {
    window.open(htmlUrl, '_blank'); // Abre a página HTML do livro
  } else {
    alert("Formato de leitura não disponível para este livro.");
  }
};

//teste
