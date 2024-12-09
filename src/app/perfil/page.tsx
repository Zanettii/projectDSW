"use client";

import Reac, {useState} from 'react';
import { user as userDados } from '../../../public/dadosBase/userDados';

interface CategoriaProps {
  nome: string;
  html: React.ReactNode;
}


const user = {
  userName: userDados.id,
  nome: userDados.nome,
  anoNascimento: userDados.anoNascimento,
  avatar: userDados.avatar,
  avatarIcon: userDados.avatarIcone,
  amigos: userDados.friends,
  avancoDados: userDados.avanco,
};

const userAvanco = {
  missoes: user.avancoDados['Missões'],
  paginas: user.avancoDados['Páginas'],
  sequencia: user.avancoDados['Sequências'],
  livro: user.avancoDados['Livros'],
};

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
    <div className="flex gap-[10px] p-4 relative pt-[1rem] overflow-hidden bg-[var(--secondary)] text-[var(--text-title)] rounded-lg h-[500px] ">
      <section id="perfil" className="w-2/5 flex flex-col items-center pt-4  rounded-lg bg-[var(--primary)] ">
        <div className="text-center">
        <div className="relative">
        <img
          src={`${user.avatarIcon[1]}`}
          alt="Foto do Perfil"
          className="mb-[2px] mt-[5px] w-32 h-32 rounded-full border-[6px] border-[var(--text-title)]"
        />

        <a href="../perfil/edicaoAvatar"  className="absolute bottom-[2px] right-[8px] w-[28px] h-[28px] bg-[var(--text-title)] rounded-full flex items-center justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5 text-[var(--accent)] mt-[2px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 3.487a2.25 2.25 0 013.182 0l.469.47a2.25 2.25 0 010 3.182l-9.66 9.66a4.5 4.5 0 01-1.591.999l-3.05 1.016c-.857.285-1.654-.513-1.368-1.368l1.015-3.05a4.5 4.5 0 01.999-1.591l9.66-9.66z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5l-6-6"
            />
          </svg>
        </a>
      </div>
          <h3 className="mt-[0px] mb-[-2px] text-[var(--text-title)] text-[18px] font-semibold ">{user.nome}</h3>
          <h4 className="text-[var(--text-sub)] mp-[0px] mt-[0px]">{user.userName}</h4>
        </div>
        <div className="flex gap-4 py-1 text-center text-[var(--text-title)]"> {/*alterar variavel de cor */}
          <div className="max-w-[160px] w-[100px] min-h-[50px]">
            <p className="mb-1 mt-2 text-base font-semibold text-[15px]">Livros</p>
            <p className="mt-1 text-base text-[18px]">{userAvanco.livro}</p>
          </div>
          <div className="max-w-[160px] w-[100px] min-h-[50px]">
            <p className="mb-1 mt-2 text-base font-semibold text-[15px]">Páginas</p>
            <p className="mt-1 text-base text-[18px]">{userAvanco.paginas}</p>
          </div>
          <div className="max-w-[160px] w-[100px] min-h-[50px]">
            <p className="mb-1 mt-2 text-base font-semibold text-[15px] ">Missões</p>
            <p className="mt-1 text-base text-[18px]">{userAvanco.missoes}</p>
          </div>
        </div>
      </section>

      
      {/* Conquistas e Missão */}
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
    </div>
  );
}
