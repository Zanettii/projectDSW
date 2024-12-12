"use client";

import Reac, {useState} from 'react';
import { user as userDados, userMissao, userPosts } from '../../../public/dadosBase/userDados';
import { achievements as conq } from '../../../public/dadosBase/conquistas';
import { rankings as rankingsData } from "../ranking/rankingsData";
import MissaoCardPerfil   from "@/components/MissaoCard";
import ContainerCategorias  from "@/components/GenericoPerfil";
import PostCard from '../../components/PostCard'
import { title } from 'process';


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
      <ContainerCategorias title="Seus Amigos" qtCompLinha={5}>
          {userDados.friends.map((id) => {
            const amigo = rankingsData.Páginas.amigos.find((rank) => rank.id === id); // Ajusta o caminho
            if (!amigo) return null;
            return (
              <div
                key={amigo.id}
                className="flex flex-col items-center  object-cover cursor-pointer"
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
       </ContainerCategorias>
    ),
  },
  {
    nome: 'Conquistas',
    html:  (
      <ContainerCategorias title="Conquistas" qtCompLinha={5}>
            {user.conquistas.map((id) => (
              <div key={id} className="flex flex-col justify-between items-center text-center rounded-md bg-gradient-to-t from-[var(--accent2)] via-[var(--accent2)] to-[var(--accent2)] transition-all duration-300 ease-in-out hover:bg-gradient-to-t hover:from-[var(--accent3)] hover:via-[var(--accent2)] hover:to-purple-300 p-2 w-[100px]  h-[145px] cursor-pointer ">
                <img
                  src={`/conquistas/${id}.png`}
                  alt={`Conquista ${id}`}
                  className="w-[90px] h-[90px] object-cover"
                />
                <p className="mt-1 text-[12px] text-[var(--text-title)]">{conq[id].name}</p>
              </div>
            ))}
          </ContainerCategorias>
    ),
  },
    {
      nome: 'Posters',
      html: (
        <ContainerCategorias title="Posteres" qtCompLinha={2}>
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
        </ContainerCategorias>
      ),
    },
    
  {
    nome: 'Missões',
    html: (
      <ContainerCategorias title="Missões" qtCompLinha={4}>
          {userMissao.map((missao) => (
            <MissaoCardPerfil
                key={missao.id}
                id={missao.id} 
                nome={missao.nome} 
                tipo={missao.tipo}
                dataFim={missao.dataFim}
                icone={`/Missoes/${missao.icone}.png`} 
                progresso={missao.progresso}
            />
          ))}
      </ContainerCategorias>
    )
  },    
];


export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Conquistas');

  const categoriaAtual = categorias.find((cat) => cat.nome === selectedCategory);

  return (
    <div className="flex gap-[10px] p-4 position: static  pt-[1rem] overflow-hidden bg-[var(--secondary)] text-[var(--text-title)] rounded-lg h-100vh  max-h-[85vh]">
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
            <p className="mt-1 text-base text-[19px]">{userAvanco.livro}</p>
          </div>
          <div className="max-w-[160px] w-[100px] min-h-[50px]">
            <p className="mb-1 mt-2 text-base font-semibold text-[15px]">Páginas</p>
            <p className="mt-1 text-base text-[19px]">{userAvanco.paginas}</p>
          </div>
          <div className="max-w-[160px] w-[100px] min-h-[50px]">
            <p className="mb-1 mt-2 text-base font-semibold text-[15px] ">Missões</p>
            <p className="mt-1 text-base text-[19px]">{userAvanco.missoes}</p>
          </div>
          </div>
          <hr />
          <div className="flex-col">
            <p className='mt-[0px] mb-[-2px] text-[var(--text-title)] text-[18px] font-semibold'>Conquistas Principais</p>
            <div className="grid grid-cols-3 gap-4 flex-col mt-[10px]">
            {user.conquistas.slice(0, 3).map((id) => (
              <div key={id} className="flex flex-col items-center rounded-md bg-[var(--accent2)] p-2 cursor-pointer bg-gradient-to-t from-[var(--accent3)] via-[var(--accent2)] to-purple-500 transition-all duration-300 ease-in-out hover:bg-gradient-to-t hover:from-[var(--accent3)] hover:via-[var(--accent2)] hover:to-purple-300">
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
          <aside className="w-full flex justify-center items-center mt-[-27px] mb-[-10px]">
            <div className="w-full flex justify-center items-center gap-4 bg-[var(--primary)] py-2 rounded-lg shadow-md">
              {categorias.map((categoria) => (
                <div key={categoria.nome}>
                  <button
                    className={`py-2 px-6 rounded-md font-semibold transition duration-300 ${
                      selectedCategory === categoria.nome
                        ? 'bg-[var(--accent-dark)] text-white'
                        : 'bg-[var(--accent)] text-white hover:bg-[var(--accent-dark)]'
                    }`}
                    onClick={() => setSelectedCategory(categoria.nome)}
                  >
                    {categoria.nome}
                  </button>
                </div>
              ))}
            </div>
          </aside>


          {/* Conteúdo Dinâmico */}
            <main className="max-w-[95vh] min-w-[95vh]">
              {categoriaAtual?.html || <p>Selecione uma categoria</p>}
            </main>
      </section>
    </div>
  );
}
