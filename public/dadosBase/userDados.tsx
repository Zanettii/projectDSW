import { personagens } from './personagens';

export const user = {
    id: 'verbix',
    email: 'verbix@gmail.com',
    nome: 'Verbix App',
    anoNascimento: '20/10/2004',
    avatar: "Frederico",
    avatarIcone: personagens['Frederico'].imgs,
    conquistas: [1, 2,3,4,5,6],
    friends: ['joao123', 'maria456','ana012','camila567','rafael910','gustavo234'],
    avanco: {
      Páginas: 30,
      Sequências: 3, 
      Missões:   10,
      Livros: 2,
      Amigos: 2,
      LoginsTotais: 6,
    },
    missoes: []
  };

export const userMissao = [
  {'nome': 'Missão 58',
    'tipo': 'Livros',
    'meta': 70,
    'dataInicio': '09/12/2024',
    'dataFim': '21/12/2024',
    'icone': 'mago',
    'progresso':1,
    'id': 450},
   {'nome': 'Missão 4',
    'tipo': 'Página',
    'meta': 34,
    'dataInicio': '09/12/2024',
    'dataFim': '23/12/2024',
    'icone': 'coruja',
    'progresso':5,
    'id': 221},
   {'nome': 'Missão 86',
    'tipo': 'Sequências',
    'meta': 88,
    'dataInicio': '09/12/2024',
    'progresso':1,
    'dataFim': '04/01/2025',
    'icone': 'coruja',
    'id': 341},
   {'nome': 'Missão 34',
    'tipo': 'Página',
    'meta': 32,
    'dataInicio': '09/12/2024',
    'dataFim': '26/12/2024',
    'icone': 'espada',
    'progresso':5,
    'id': 234},
   {'nome': 'Missão 28',
    'tipo': 'Livros',
    'meta': 84,
    'dataInicio': '09/12/2024',
    'dataFim': '27/12/2024',
    'icone': 'dragão',
    'progresso':1,
    'id': 156}
]

export const userPosts = [
  {
    nome: 'Missão 58',
    titulo: 'Livros',
    imagem: 70, // Referência de imagem (presumo que o número seja um identificador de imagem)
    descricao: 'Explorando os mais recentes livros sobre desenvolvimento de software.',
    data: '10 de Dezembro de 2024',
  },
  {
    nome: 'Missão 59',
    titulo: 'Tecnologia em Alta',
    imagem: 71, // Identificador para imagem
    descricao: 'Entendendo como a IA está transformando a programação.',
    data: '9 de Dezembro de 2024',
  },
  {
    nome: 'Missão 60',
    titulo: 'Futuro das Redes Sociais',
    imagem: 72, // Identificador para imagem
    descricao: 'Analisando as tendências mais recentes nas plataformas sociais.',
    data: '8 de Dezembro de 2024',
  },
];




  