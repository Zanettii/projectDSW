const API_URL = "https://gutendex.com/books";

export const fetchLivrosAPI = async (query: string = "") => {
  const response = await fetch(`${API_URL}?languages=pt${query}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar dados da API externa");
  }
  return response.json();
};


//busca de livros para a biblioteca.