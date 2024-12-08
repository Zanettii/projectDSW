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

      <main style={{ display: "flex", flexDirection: "column", flexGrow: 1, overflowY: "hidden" }}>
        {/* Barra de busca */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
          <input
              type="text"
              placeholder="Buscar"
              style={{ padding: "10px", width: "300px", border: "none", borderRadius: "10px", color: "black" }}
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                marginLeft: "20px",
                border: "1px",
                borderRadius: "10px",
                cursor: "pointer",
                padding: "7px",
                width: "100px",
                background: "#430372"
              }}
            >
              Pesquisar
            </button>

          </div>
        </div>

        {/* Lista de livros */}
        <div style={{ display: "flex", flexGrow: 2, padding: "20px", overflowY: "hidden" }}>
          <div style={{ width: "100%", overflowY: "auto", maxHeight: "calc(100vh - 100px)" }}>
            {loading ? (
              <p style={{ color: "white", textAlign: "center" }}>Carregando livros...</p>
            ) : (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                  gap: "20px",
                  padding: "10px",
                }}
              >
                {livros.map((livro) => (
                  <div
                    key={livro.id}
                    className="livro"
                    style={{
                      textAlign: "center",
                      cursor: "pointer",
                      transition: "transform 0.2s ease-in-out",
                    }}
                    onClick={() => handleLivroClick(livro)}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  >
                    <div
                      style={{
                        width: "140px",
                        height: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                        borderRadius: "8px",
                        backgroundColor: "#333",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <img
                        src={livro.formats["image/jpeg"] || "/placeholder.png"}
                        alt={livro.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        marginTop: "10px",
                        width: "140px",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "white",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {livro.title}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Detalhes do livro */}
          {livroSelecionado && (
            <div
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "30%",
                padding: "20px",
                height: "100vh",
                boxShadow: "-3px 0 5px rgba(0, 0, 0, 0.2)",
                zIndex: 10,
                overflowY: "auto",
                backgroundColor: "#240046",
              }}
            >
              <button
                onClick={handleCloseDescription}
                style={{ float: "right", marginBottom: "10px", padding: "5px", width: "20px", color: "white" }}
              >
                X
              </button>
              <img
                src={livroSelecionado.formats["image/jpeg"] || "/placeholder.png"}
                alt={livroSelecionado.title}
                style={{ width: "50%", height: "auto" }}
              />
              <h2 style={{ color: "white", textAlign: "center", fontSize: "20px", padding: "20px" }}>
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
              <a href="./leitura" className="text-white">
                <button
                  style={{
                    float: "right",
                    cursor: "pointer",
                    width: "200px",
                    height: "40px",
                    border: "none",
                    borderRadius: "5px",
                    background: "#430372"
                  }}
                >
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
