"use client";
import React, { useEffect, useState } from 'react';
import { fetchLivrosOrganizados } from '../services/apiServices';

export default function Leituras() {
  const [leiturasAvaliadas, setLeiturasAvaliadas] = useState<any[]>([]);
  const [livrosPorGenero, setLivrosPorGenero] = useState<{ [key: string]: any[] }>({});
  const [generoSelecionado, setGeneroSelecionado] = useState<string>("");

  // Função para carregar os dados da API
  useEffect(() => {
    const carregarLivros = async () => {
      try {
        const { leiturasAvaliadas, livrosPorGenero } = await fetchLivrosOrganizados();
        setLeiturasAvaliadas(leiturasAvaliadas);
        setLivrosPorGenero(livrosPorGenero);
      } catch (error) {
        console.error("Erro ao carregar os livros:", error);
      }
    };

    carregarLivros();
  }, []);

  const handleGeneroChange = (genero: string) => {
    setGeneroSelecionado(genero === generoSelecionado ? "" : genero);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-primary mb-8">
        Leituras Disponíveis
      </h1>
      <p className="text-center text-gray-700 mb-10">
        Explore as leituras mais bem avaliadas e escolha seu gênero favorito!
      </p>

      {/* Contêiner Superior - Leituras mais bem avaliadas */}
      <div className="bg-primary p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-white text-xl font-bold text-center mb-4">Mais bem avaliadas</h2>
        <div className="flex justify-around flex-wrap gap-6">
          {leiturasAvaliadas.map((leitura) => (
            <div key={leitura.id} className="bg-white border-2 border-primary rounded-lg p-5 w-60 text-center shadow-md">
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
              <button className="bg-accent text-white py-2 px-4 rounded mt-4">
                Ler agora
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contêiner Inferior - Checkboxes de Gêneros e Livros */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-primary text-xl font-bold mb-5">Gêneros</h3>
        <div className="flex gap-6 mb-6">
          <select
            value={generoSelecionado}
            onChange={(e) => handleGeneroChange(e.target.value)}
            className="p-3 border-2 border-primary rounded-md text-primary font-semibold"
          >
            <option value="">Selecione um gênero</option>
            {Object.keys(livrosPorGenero).map((genero) => (
              <option key={genero} value={genero}>
                {genero}
              </option>
            ))}
          </select>
        </div>

        {generoSelecionado && livrosPorGenero[generoSelecionado] && (
          <div>
            <h4 className="text-accent text-xl font-bold mb-4">{generoSelecionado}</h4>
            <ul>
              {livrosPorGenero[generoSelecionado].map((livro) => (
                <li key={livro.id} className="text-gray-700 py-2 border-b border-gray-200">
                  {livro.title} 
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
