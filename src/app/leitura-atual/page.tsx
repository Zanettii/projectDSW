"use client";
import React, { useEffect, useState } from "react";
import { fetchLivrosOrganizados } from "../services/apiServices";

export default function Leituras() {
  const [leiturasAvaliadas, setLeiturasAvaliadas] = useState<any[]>([]);
  const [livroSelecionado, setLivroSelecionado] = useState<string | null>(null);

  // Dados fictícios de progresso
  const leiturasComProgresso = [
    { id: 1, pages_read: 120, total_pages: 300 },
    { id: 2, pages_read: 50, total_pages: 100 },
    { id: 3, pages_read: 200, total_pages: 250 },
  ];

  // Função para carregar os dados da API
  useEffect(() => {
    const carregarLivros = async () => {
      try {
        const { leiturasAvaliadas } = await fetchLivrosOrganizados();
        setLeiturasAvaliadas(leiturasAvaliadas);
      } catch (error) {
        console.error("Erro ao carregar os livros:", error);
      }
    };

    carregarLivros();
  }, []);

  const handleAbrirLivro = (url: string) => {
    setLivroSelecionado(url); // Exibe o aviso
    setTimeout(() => {
      setLivroSelecionado(null); // Remove o aviso após alguns segundos
      window.open(url, "_blank"); // Abre o livro em uma nova aba
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-3xl font-bold text-primary mb-8">Suas Leituras Recentes</h1>

      {/* Contêiner Centralizado */}
      <div className="bg-primary p-6 rounded-lg shadow-lg max-w-4xl w-full">
        
        <div className="flex justify-center flex-wrap gap-6">
          {leiturasAvaliadas.slice(0, 3).map((leitura, index) => {
            const progresso = leiturasComProgresso[index] || { pages_read: 0, total_pages: 1 };
            const progressoPorcentagem = Math.min(
              100,
              (progresso.pages_read / progresso.total_pages) * 100
            );

            return (
              <div
                key={leitura.id}
                className="bg-white border-2 border-primary rounded-lg p-5 w-60 text-center shadow-md relative"
              >
                {leitura.formats?.["image/jpeg"] && (
                  <img
                    src={leitura.formats["image/jpeg"]}
                    alt={`Capa de ${leitura.title}`}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                )}
                <h3 className="text-primary">{leitura.title}</h3>
                <p className="text-gray-700">
                  {leitura.authors?.[0]?.name || "Autor desconhecido"}
                </p>

                {/* Barra de Progresso */}
                <div className="bg-gray-200 h-3 rounded-full mt-4">
                  <div
                    className="bg-[#480c8d] h-3 rounded-full"
                    style={{ width: `${progressoPorcentagem}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  {progresso.pages_read}/{progresso.total_pages} páginas lidas
                </p>

                <button
                  onClick={() => handleAbrirLivro(leitura.formats["text/html"])}
                  className="bg-accent text-white py-2 px-4 rounded mt-4 hover:bg-accent-dark"
                >
                  Ler agora
                </button>

                {/* Aviso ao clicar */}
                {livroSelecionado === leitura.formats["text/html"] && (
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center rounded-lg">
                    <p className="text-white text-center font-bold px-4">
                      Esse livro será aberto em uma nova página!
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

