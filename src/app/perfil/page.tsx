"use client";

import Reac, {useState} from 'react';
import { user as userDados, userMissao, userPosts } from '../../../public/dadosBase/userDados';
import { achievements as conq } from '../../../public/dadosBase/conquistas';
import { rankings as rankingsData } from "../ranking/rankingsData";
import PostCard from '../../components/PostCard'


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
  friends: userDados.friends,
  avancoDados: userDados.avanco,
  conquistas: userDados.conquistas,
  missoes: userDados.missoes,
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
    html:  (
      <div>
        <h3 className="mb-2 text-lg font-semibold text-[var(--text-title)]">Seus Amigos</h3>
        <hr />
        <div className="grid grid-cols-4 gap-4 mt-8">
          {userDados.friends.map((id) => {
            const amigo = rankingsData.Páginas.amigos.find((rank) => rank.id === id); // Ajusta o caminho
            if (!amigo) return null;
            return (
              <div
                key={amigo.id}
                className="flex flex-col items-center  object-cover "
              >
                <img
                  src={`/Personagens/${amigo.avatar}/${amigo.avatar}Perfil.png`} // Caminho da imagem
                  alt={`Avatar de ${amigo.name}`}
                  className="w-[80px] h-[80px] rounded-full border-[4px] border-[var(--text-title)] shadow-xl object-cover "
                />
                <p className="mt-2 text-sm text-[var(--text-title)]">{amigo.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    ),
  },
  {
    nome: 'Conquistas',
    html:  (
      <div>
        <h3 className="mb-2 text-lg font-semibold text-[var(--text-title)]">Conquistas</h3>
        <hr />
        <div className="flex-col">
            <div className="grid grid-cols-4 gap-4 flex-col mt-8 ">
            {user.conquistas.map((id) => (
              <div key={id} className="flex flex-col justify-between items-center text-center rounded-md bg-[var(--accent2)] p-2 w-[110px]  h-[130px]">
                <img
                  src={`/conquistas/${id}.png`}
                  alt={`Conquista ${id}`}
                  className="w-[75px] h-[75px] object-cover"
                />
                <p className="mt-1 text-[12px] text-[var(--text-title)]">{conq[id].name}</p>
              </div>
            ))}
            </div>
      </div>
      </div>
    ),
  },
    {
      nome: 'Posters',
      html: (
        <div className="grid grid-cols-1 items-center text-center gap-12 flex-col mt-1 overflow-y-auto max-h-[360px]  scroll-hidden">
          {userPosts.map((post) => (
            <PostCard
              key={post.nome} 
              nome={post.nome} 
              titulo={post.titulo}
              descricao={post.descricao}
              imagem={`/Posts/${post.imagem}.jpg`} 
              data={post.data}
            />
          ))}
        </div>
      ),
    },
    
  {
    nome: 'Missões',
    html: (
      <div>
        <h3 className="mb-2 text-lg font-semibold text-[var(--text-title)]">Missões</h3>
        <hr />
        <div className="flex-col">
        <div className="grid grid-cols-3 gap-4 mt-4 overflow-visible overflow-y-auto max-h-[300px] scroll-hidden">
  {userMissao.map((missao) => (
    
    <div
    key={missao.id}
    className="flex flex-col justify-between items-center rounded-md p-2 w-[145px] h-[180px] bg-[var(--background)] transition-all duration-300 ease-in-out hover:scale-105 hover:h-[190px] hover:w-[150px] hover:bg-opacity-80 hover:bg-[rgba(255, 255, 255, 0.2)]" // Efeito de hover com aumento de escala e tamanho
    style={{
      background: `
        linear-gradient(to top, rgba(35, 35, 35, 0.8), rgba(200, 200, 200, 0.2))`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      filter: 'brightness(0.8) saturate(1.3) contrast(1.1)',
    }}
  >
    <div className="relative w-full h-[130px] flex justify-center items-center overflow-hidden">
      <img
        src={`/Missoes/${missao.icone}.png`}
        alt={`Missões ${missao.icone}`}
        className="w-[100px] h-[100px] object-cover" // A imagem preenche a div sem distorcer
      />
    </div>
    <div className="text-center z-10">
      <p
        className="text-[12px] font-semibold text-white"
        style={{
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', // Adiciona sombra ao texto
        }}
      >
        {missao.nome} | {missao.tipo}
      </p>
      <p
        className="text-[12px] font-semibold text-white mt-2"
        style={{
          textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', // Adiciona sombra ao texto
        }}
      >
        {missao.dataFim}
      </p>
    </div>
    {/* Barra de progresso */}
    {missao.progresso < 100 && missao.progresso >= 0 && (
      <div className="w-full bg-gray-300 rounded-full h-2.5 mt-2">
        <div
          className="bg-[var(--accent2)] h-2.5 rounded-full"
          style={{ width: `${missao.progresso}%` }}
        ></div>
      </div>
    )}
  </div>
  
  ))}
</div>

        </div>
      </div>
    )
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
        <div className="flex gap-4 py-1 text-center text-[var(--text-title)] flex-col"> {/*alterar variavel de cor */}
          <div className="flex gap-4 py-1 text-center text-[var(--text-title)]">
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
          <hr />
          <div className="flex-col">
            <p className='mt-[0px] mb-[-2px] text-[var(--text-title)] text-[18px] font-semibold'>Conquistas Principais</p>
            <div className="grid grid-cols-3 gap-4 flex-col mt-[10px]">
            {user.conquistas.slice(0, 3).map((id) => (
              <div key={id} className="flex flex-col items-center rounded-md bg-[var(--accent2)] p-2 ">
                <img
                  src={`/conquistas/${id}.png`}
                  alt={`Conquista ${id}`}
                  className="w-[70px] h-[70px] object-cover"
                />
                <p className="mt-1 text-[12px] text-[var(--text-title)]">{conq[id].name}</p>
              </div>
            ))}
            </div>
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
