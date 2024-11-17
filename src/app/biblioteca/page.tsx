"use client";
import React, { useState } from "react";
import categoriaLivros from "./livros"; 
import  {Livro} from "./livros"; 

export default function Page() {
  const [livroSelecionado, setLivroSelecionado] = useState<any>(null);

  const handleLivroClick = (livro: Livro) => {
    setLivroSelecionado(livro);
  };

  const handleCloseDescription = () => {
    setLivroSelecionado(null);
  }

  return (
    <div className="bg-secondary">
    
      <main style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, overflowY: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="text" placeholder="Buscar" style={{ padding: '10px', width: '300px', border: 'none', borderRadius: '10px'  }} />
            <button style={{ marginLeft: '20px', border: 'none', borderRadius: '3px', cursor: 'pointer', padding: '3px', width: '100px' }}>Pesquisar</button>
            <button style={{ marginLeft: '20px', border: 'none', borderRadius: '3px', cursor: 'pointer', padding: '3px', width: '60px'}}>Filtro</button>
          </div>
        </div>

        <div style={{ display: 'flex', flexGrow: 2, padding: "50px", overflowY: 'hidden' }}> 
          <div style={{ width: '100%', overflowY: 'auto', maxHeight: 'calc(100vh - 120px)' }}>
            {categoriaLivros.map((categorias, index) => (
              <div key={index}>
                <h3>{categorias.titulo}</h3>
                <div style={{ display: 'flex', overflowX: 'auto'}}>
                  {categorias.livros.map((livro, idx) => (
                    <div
                      key={idx}
                      className="livro"
                      style={{
                        position: 'relative',
                        marginRight: '60px',
                        cursor: 'pointer',
                        textAlign: 'center',
                        padding: '20px',
                        
                        //problemas em arrumar o tamanho da imagem de capa, ainda estou resolvendo.
                        //modifiquei muito o estilo, então pode ter coisas no style que não é necessário, estarei fazendo uma limpa depois.
                        //ainda estudando a forma de usar API para o catalogo de livros, por isso ele está adicionado manualmente no livros.ts. 
                        
                      }}
                      onClick={() => handleLivroClick(livro)}
                    >
                      <img src={livro.capa} alt={livro.titulo} style={{ width: '140px', height: '170px', objectFit: 'cover'}} />
                      <p>{livro.titulo}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {livroSelecionado && (
            <div style={{
              position: 'fixed', top: 0, right: 0, width: '30%', padding: '20px',
               height: '100vh', boxShadow: '-3px 0 5px rgba(0, 0, 0, 0.2)',
              zIndex: 10, overflowY: 'auto'
            }}>
              <button onClick={handleCloseDescription} style={{ float: 'right', marginBottom: '10px',  padding: '5px', width: '20px' }}>X</button>
              <img src={livroSelecionado.capa} alt={livroSelecionado.titulo} style={{ width: '50%', height: 'auto'}} />
              <h2 style={{color: 'white', textAlign: 'center', fontSize: '20px', padding: '20px' }}>{livroSelecionado.titulo}</h2>
              <p><strong>Autor:</strong> {livroSelecionado.autor}</p>
              <p><strong>Páginas:</strong> {livroSelecionado.paginas}</p>
              <p><strong>Gênero:</strong> {livroSelecionado.genero}</p>
              <p>{livroSelecionado.descricao}</p>
              <a href='./leitura'><button style={{float: 'right',  cursor: 'pointer', width: '200px', height: '40px', border: 'none', borderRadius: '5px' }}>Ler Agora</button></a>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

