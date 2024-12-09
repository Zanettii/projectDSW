"use client";
import React, { useState, useEffect } from "react";
import { fetchLivrosAPI } from "../services/books";

interface Livro {
  id: number;
  title: string;
  authors: Array<{
    name: string;
    birth_year: number | null;
    death_year: number | null;
  }>;
  subjects: string[];
  languages: string[];
  download_count: number;
  formats: { [key: string]: string }; // URLs dos formatos do livro
}

export default function Page() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(true);
  const [livroSelecionado, setLivroSelecionado] = useState<Livro | null>(null);
  const [busca, setBusca] = useState("");

  // Função para buscar livros
  const fetchLivros = async (query: string = "") => {
    setLoading(true);
    try {
      const data = await fetchLivrosAPI(query);
      setLivros(data.results);
    } catch (error) {
      console.error("Erro ao carregar os livros:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLivros(); // Faz a busca inicial sem filtros
  }, []);

  // Função para lidar com a busca
  const handleSearch = () => {
    fetchLivros(`&search=${encodeURIComponent(busca)}`);
  };

  // Funções para exibição dos detalhes do livro
  const handleLivroClick = (livro: Livro) => {
    setLivroSelecionado(livro);
  };

  const handleCloseDescription = () => {
    setLivroSelecionado(null);
  };

  return (
    <div className="bg-secondary">
      <main className="flex flex-col flex-grow overflow-hidden">
        {/* Barra de busca */}
        <div className="flex justify-between items-center p-5">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Buscar"
              className="p-2.5 w-72 rounded-lg border-none text-black"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <button
              onClick={handleSearch}
              className="ml-5 border-2 rounded-lg cursor-pointer p-2.5 w-24 bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Pesquisar
            </button>
          </div>
        </div>

        {/* Lista de livros */}
        <div className="flex flex-grow p-5 overflow-hidden">
          <div className="w-full overflow-auto max-h-[calc(100vh-100px)]">
            {loading ? (
              <p className="text-white text-center">Carregando livros...</p>
            ) : (
              <div className="grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] gap-5 p-2.5">
                {livros.map((livro) => (
                  <div
                    key={livro.id}
                    className="livro text-center cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-105"
                    onClick={() => handleLivroClick(livro)}
                  >
                    <div className="w-36 h-52 flex justify-center items-center overflow-hidden rounded-lg bg-gray-800 shadow-lg">
                      <img
                        src={livro.formats["image/jpeg"] || "/placeholder.png"}
                        alt={livro.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="mt-2.5 w-36 text-sm font-bold text-white truncate">
                      {livro.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Detalhes do livro */}
          {livroSelecionado && (
            <div className="fixed top-0 right-0 w-1/3 p-5 h-screen shadow-lg z-10 overflow-auto bg-[#240046]">
              <button
                onClick={handleCloseDescription}
                className="float-right mb-2.5 p-1 w-5 text-white"
              >
                X
              </button>
              <img
                src={livroSelecionado.formats["image/jpeg"] || "/placeholder.png"}
                alt={livroSelecionado.title}
                className="w-1/2 h-auto"
              />
              <h2 className="text-white text-center text-xl py-5">
                {livroSelecionado.title}
              </h2>
              <p className="text-white">
                <strong>Autor:</strong>{" "}
                {livroSelecionado.authors.map((author) => author.name).join(", ") || "Desconhecido"}
              </p>
              <p className="text-white">
                <strong>Assuntos:</strong> {livroSelecionado.subjects.join(", ") || "Nenhum"}
              </p>
              <p className="text-white">
                <strong>Idiomas:</strong> {livroSelecionado.languages.join(", ")}
              </p>
              <a href="./leitura-atual" className="text-white">
                <button className="float-right cursor-pointer w-52 h-10 border-none rounded bg-[#430372]">
                  Ler Agora
                </button>
              </a>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
