"use client";

import { user } from "../../public/dadosBase/userDados"
import { useEffect, useState } from "react";
import { fetchLivrosAPI } from "../app/services/books"; // Certifique-se de ajustar o caminho


export interface Livro {
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

export default function MenuPrincipal() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [erro, setErro] = useState<string | null>(null);
  const [carregandoLivros, setCarregandoLivros] = useState<boolean>(true);

  // Dados simulados para a seção "Continue de onde parou"
  const livrosLendo = [
    { id: 1, title: "Dom Quixote", progresso: 65, img: "/dom-quixote.jpg" },
    { id: 2, title: "1984", progresso: 30, img: "/1984.jpg" },
    { id: 3, title: "A Revolução dos Bichos", progresso: 90, img: "/revolucao.jpg" },
  ];

  useEffect(() => {
    const carregarLivros = async () => {
      try {
        const dados = await fetchLivrosAPI();
        setLivros(dados.results.slice(0, 6)); // Pegue os 6 primeiros livros
      } catch (erro) {
        setErro("Erro ao carregar os livros. Tente novamente mais tarde.");
      } finally {
        setCarregandoLivros(false);
      }
    };

    carregarLivros();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo, {user.nome}!</h1>

      {/* Seção de Continue de Onde Parou */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Continue de onde parou</h2>
        <div className="flex gap-6 overflow-x-auto">
          {livrosLendo.map((livro) => (
            <div key={livro.id} className="flex-shrink-0 w-48">
              <img
                src={livro.img}
                alt={livro.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="mt-2">
                <h3 className="font-semibold">{livro.title}</h3>
                <div className="bg-gray-300 w-full h-2 rounded-full mt-1">
                  <div
                    className="bg-green-500 h-full rounded-full"
                    style={{ width: `${livro.progresso}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{livro.progresso}% concluído</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Livros Recomendados */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Livros Recomendados</h2>
        {carregandoLivros ? (
          <p>Carregando livros...</p>
        ) : erro ? (
          <p>{erro}</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {livros.map((livro) => (
              <div key={livro.id} className="bg-primary p-4 rounded-lg shadow-md">
                <img
                  src={livro.formats["image/jpeg"] || "/placeholder.png"}
                  alt={livro.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <h3 className="mt-2 font-semibold text-text">{livro.title}</h3>
                <p className="text-sm text-sub">
                  {livro.authors.length > 0 ? livro.authors[0].name : "Autor desconhecido"}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Conquistas */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Conquistas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-primary p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-text">Conquista 1</h3>
            <p className="text-sm text-text-sub">Descrição da conquista.</p>
          </div>
          <div className="bg-primary p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Conquista 2</h3>
            <p className="text-sm text-text-sub">Descrição da conquista.</p>
          </div>
        </div>
      </section>

      {/* Ranks */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Ranks</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-primary p-4 rounded-lg shadow-md">
            <h3 className="font-semibold">Usuário A</h3>
            <p className="text-sm text-text-sub">Pontuação: 12345</p>
          </div>
          <div className="bg-primary p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-text">Usuário B</h3>
            <p className="text-sm text-text-sub">Pontuação: 9876</p>
          </div>
        </div>
      </section>
    </div>
  );
}