"use client";

import Reac, {useState} from 'react';


interface CategoriaProps {
  nome: string;
  html: React.ReactNode;
}


const categorias: CategoriaProps[] = [
  {
    nome: 'Amigos',
    html: <p>Conteúdo da aba Amigos</p>,
  },
  {
    nome: 'Conquistas',
    html: (
      <div>
        <h3>Conquistas</h3>
       
      </div>
    ),
  },
  {
    nome: 'Posters',
    html: <p>Conteúdo de Posters</p>,
  },
  {
    nome: 'Missões',
    html: (
      <div>
        <h3>Missão do Mês</h3>
        <progress value="50" max="100" />
      </div>
    ),
  },
];


export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Conquistas');

  const categoriaAtual = categorias.find((cat) => cat.nome === selectedCategory);

  return (
    
      <section id="conquistas" className="w-3/5 flex flex-col items-center pt-8  rounded-lg bg-[var(--primary)]">
          {/* Lista de Categorias */}
          <aside className="w-full flex justify-center items-center mt-[-27px]">
            <div className="w-full flex justify-center items-center gap-4 bg-[var(--primary)] py-2 rounded-lg shadow-md">
              {categorias.map((categoria) => (
                <div key={categoria.nome}>
                  <button
                    className="py-2 px-6 rounded-md bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-dark)] transition duration-300"
                    onClick={() => setSelectedCategory(categoria.nome)}
                  >
                    {categoria.nome}
                  </button>
                </div>
              ))}
            </div>
          </aside>


          {/* Conteúdo Dinâmico */}
            <main className="w-3/4">
              {categoriaAtual?.html || <p>Selecione uma categoria</p>}
            </main>
      </section>
  );
}
