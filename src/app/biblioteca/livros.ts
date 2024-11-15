interface Categoria {
    titulo: string;
    livros: Livro[];
  }
  
  const categoriaLivros: Categoria[] = [
    {
      titulo: "Educação",
      livros: [
        { titulo: "Matemática em atividades, jogos e desafios", 
          descricao: "Detalhe: O livro apresenta uma coletânia de atividades, jogos e desafios que abrangem os conteúdos essencias da disciplina de maneira fácil de compreender e aplicar \n Autor: ", 
          autor: "Odenise Maria Bezerra",
          paginas: "114",
          genero: "Educação",
          capa: "../capasBiblioteca/matematicaEMAtividadesEjogos.jpg"  
        },
        { titulo: "O grande livro de matemática do Manual do Mundo", 
          descricao: "Anotações incriveis e divertidas para você aprender sobre o intrigante universo dos números e das formas geométricas", 
          autor: "",
          paginas: "",
          genero: "",
          capa: "../capasBiblioteca/oGrandeLivrodeMate.jpg" },

        {titulo: "Matemática no Ensino Fundamental: Formação de Professores e Aplicação em Sala de Aula", 
          descricao: "Este livro aborda de forma clra e precisa os principais conceitos matemáticos do ensino fundamental.", 
          autor: "",
          paginas: "",
          genero: "",
          capa: "../capasBiblioteca/matematicaEnsinoF.jpg"},

        {titulo: "Gramática: Texto, reflexão e uso", 
          descricao: " A obra adota uma perspectiva que une reflexão, crítica sbre a língua e desenvolvimento a competência do estudante", 
          autor: "",
          paginas: "",
          genero: "",
          capa: "../capasBiblioteca/gramaticaPortugues.jpg"},

        { titulo: "Segredos do Império Romano", 
          descricao: "A história complea da formação de um dos mais importantes impérios já constituídos. Conheça de perto a origem, a ascensão, a crise e a queda do Império Romano", 
          autor: "Walter Fernandes",
          paginas: "144",
          genero:"Roma História",
          capa: "../capasBiblioteca/imperioRomanoHistoria.jpg"  },

        { titulo: "Segunda Guerra Mundial: A Guerra mais Sangrenta da História", 
          descricao: "Tida como o maior conflito armado já visto, a Segunda Guerra Mundial desencadeou eventos sem precedentes entre os quais o Holocausto e a bomba atômica causou perdas humanas inestimáveis e redesenhou as configurações políticas, sociais, econômicas e geográficas mundiais.", 
          autor: "Claudio Blanc",
          paginas: "164",
          genero: "Guerra Mundia História Militar",
          capa: "../capasBiblioteca/segundaGuerra.jpg"  },
          
        { titulo: "titulo", 
          descricao: "", 
          autor: "",
          paginas: "",
          genero: "",
          capa: "../capasBiblioteca/nome.jpg"  },

        { titulo: "titulo", 
          descricao: "",
          autor: "",
          paginas: "",
          genero: "", 
          capa: "../capasBiblioteca/nome.jpg"  },

        { titulo: "titulo", 
          descricao: "", 
          autor: "",
          paginas: "",
          genero: "",
          capa: "../capasBiblioteca/nome.jpg"  },

        { titulo: "titulo", 
          descricao: "", 
          autor: "",
          paginas: "",
          genero: "",
          capa: "../capasBiblioteca/nome.jpg"  },
      ],
    },
    {
        titulo: "Fantasias e Aventuras",
        livros: [
          { titulo: "O pequeno príncipe", 
            descricao: "Um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que leva a uma aventura filosófica e poética através de planetas que encerram a solidão humana.", 
            autor: "Antonie de Saint-Exupéry",
            paginas: "96",
            genero: "Ficção Científica Fantasia",
            capa: "../capasBiblioteca/pequenoPrincipe.jpg"  },

          { titulo: "Alice no País das Maravilhas", 
            descricao: "Alice é despertada de um leve sono ao pé de uma árvore por um coelho peculiar; Uma criatura alva e falante com roupas engraçadas, que consulta seu relógio e reclama do próprio atraso. Curiosa como toda criança, Alice segue o animal até cair em um buraco sem fim que mudou para sempre a literatura infantil ", 
            autor: " Lewis Carroll ",
            paginas: "224",
            genero: "Fantasia",
            capa: "../capasBiblioteca/alicePaisMara.jpg"  },

          { titulo: "O Jardim Secreto", 
            descricao: "O Jardim Secreto é um livro que fascina a todos com sua receita secreta para vencer obstáculos, superar desafios e encontrar um motivo para ser feliz.",
            autor: " Frances Hodgson Bernett",
            paginas: "176",
            genero: "(...)", 
            capa: "../capasBiblioteca/jardimSecreto.jpg"  },

          { titulo: "Harry Potter e a Pedra Filosofal", 
            descricao: "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderoso bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural... ", 
            autor: "J.K. Rowling",
            paginas: "264",
            genero: "Fantasia",
            capa: "../capasBiblioteca/hpPedraFilosofal.jpg"  },

          { titulo: "Harry Potter e a Câmara Secreta", 
            descricao: "", 
            autor: "J.K. Rowling",
            paginas: "",
            genero: "",
            capa: "../capasBiblioteca/nome.jpg"  },

          { titulo: "Percy Jackson e o Ladrão de Raios", 
            descricao: "", 
            autor: "",
            paginas: "",
            genero: "",
            capa: "../capasBiblioteca/nome.jpg"  },

          { titulo: "titulo", 
            descricao: "", 
            autor: "",
            paginas: "",
            genero: "",
            capa: "../capasBiblioteca/nome.jpg"  },

          { titulo: "titulo", 
            descricao: "", 
            autor: "",
            paginas: "",
            genero: "",
            capa: "../capasBiblioteca/nome.jpg"  },

          { titulo: "titulo", 
            descricao: "",
            autor: "",
            paginas: "",
            genero: "", 
            capa: "../capasBiblioteca/nome.jpg"  },

        ],
      },
    // ++++
  ];
  
  export default categoriaLivros; 