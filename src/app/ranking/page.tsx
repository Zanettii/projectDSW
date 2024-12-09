"use client";

import React, { useState } from "react";
import styles from "./ranking.module.css";
import { rankings as rankingsData } from "./rankingsData";
import { user as userDados } from '../../../public/dadosBase/userDados';

type RankingCategory = "Páginas" | "Livros" | "Sequências" | "Missões";
type RankingType = "amigos" | "geral";

const user = {
  userName: userDados.id,
  nome: userDados.nome,
  idade: '',
  avatar: userDados.avatar,
  avatarIcon: userDados.avatarIcone,
  conquistas: userDados.conquistas,
  amigos: userDados.friends,
  avancoDados: userDados.avanco,
  missoes: userDados.missoes,
};


const RankingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<RankingCategory>("Páginas");
  const [selectedRankingType, setSelectedRankingType] = useState<RankingType>("amigos");

  

  const handleCategoryChange = (category: RankingCategory) => {
    setSelectedCategory(category);
  };

  const handleRankingTypeChange = (type: RankingType) => {
    setSelectedRankingType(type);
  };

  const sortedRankings = rankingsData[selectedCategory][selectedRankingType].sort((a, b) => b.score - a.score);

  const top20Rankings = sortedRankings.slice(0, 20);
  const top3Rankings = top20Rankings.slice(0, 3);

  // Posição do usuário no ranking
  const userRank = sortedRankings.findIndex((item) => item.id === user.userName) + 1;

  return (
    <div className={styles.container}>
      {/* Navegação principal */}
      <nav className={styles.navigation}>
        <section className={styles.header}>
          {Object.keys(rankingsData).map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${selectedCategory === category ? styles.selectedCategory : ""}`}
              onClick={() => handleCategoryChange(category as RankingCategory)}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Sessão do Tipo de Ranking */}
        <section className={styles.rankingTypeSelector}>
          <button
            className={`${styles.rankingTypeButton} ${selectedRankingType === "amigos" ? styles.selectedRankingType : ""}`}
            onClick={() => handleRankingTypeChange("amigos")}
          >
            Amigos
          </button>
          <button
            className={`${styles.rankingTypeButton} ${selectedRankingType === "geral" ? styles.selectedRankingType : ""}`}
            onClick={() => handleRankingTypeChange("geral")}
          >
            Geral
          </button>
        </section>
      </nav>

      {/* Sessão dos Rankings */}
      <div className={styles.rankingsContainer}>
        {/* Podio Fixo */}
        <div className={styles.containerDestaqueRank}>
          <div className={styles.podio}>
          <div className="relative">
  <img src="Ranks/podio1.png" alt="Podio Foto" className={styles.podioImg} />
  <span className="absolute top-[140px] left-[102.5px] transform -translate-x-1/2 text-white text-sm font-bold z-20">
    {top3Rankings[1].id}
  </span>

  <img
    src={`/Personagens/${top3Rankings[1].avatar}/${top3Rankings[1].avatar}Perfil.png`}
    alt="Avatar"
    className="absolute top-[160px] left-[102.5px] transform -translate-x-1/2 w-[52.5px] h-[52.5px] rounded-full border-4 border-[var(--accent3)] z-10"
  />
   <span className="absolute top-[65px] left-[189px] transform -translate-x-1/2 text-white text-sm font-bold z-20">
    {top3Rankings[0].id}
  </span>

  <img
    src={`/Personagens/${top3Rankings[0].avatar}/${top3Rankings[0].avatar}Perfil.png`}
    alt="Avatar"
    className="absolute top-[120px] left-[189.8px] transform -translate-x-1/2 -translate-y-1/2 w-[68px] h-[66.5px] rounded-full border-4 border-[var(--text-title)] z-20"
  />

   <span className="absolute top-[150px] right-[40px] transform -translate-x-1/2 text-white text-sm font-bold z-20">
    {top3Rankings[2].id}
  </span>

  <img
    src={`/Personagens/${top3Rankings[2].avatar}/${top3Rankings[2].avatar}Perfil.png`}
    alt="Avatar"
    className="absolute top-[172px] right-[102.5px] transform translate-x-1/2 w-[54px] h-[54px] rounded-full border-4 border-[var(--accent)] z-10"
  />
</div>

          </div>

          <div>
            {userRank > 0 ? (
              <div className={styles.userposicao}>
                <span className={styles.rank}>{userRank}º</span>
                <span className={styles.imgage}><img src={`/Personagens/${user.avatar}/${user.avatar}Perfil.png`} alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[var(--text-title)] -mb-[5px]" /></span>
                <span className={styles.name}>{user.userName}</span>
                <span className={styles.score}>{sortedRankings[userRank - 1].score} PL</span>
              </div>
            ) : null}
          </div>
        </div>

        {/* Rankings Roláveis */}
        <section className={`${styles.rankingsScrollable} scroll-hidden`}>
          <div className={styles.rankingsCabeca}>
            <div className={styles.rankingCabeca}>
              <span className={styles.rank}>Posição</span>
              <span className={styles.name}>Usuário</span>
              <span className={styles.scoreCabeca}>Pontuação</span>
            </div>
          </div>
          <div className={`${styles.rankings} scroll-hidden`}>
            {top20Rankings.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.rankingItem} ${index < 3 ? styles.topRanking : ""} ${item.id === user.userName ? styles.highlightUser : ""} scroll-hidden`}
              >
                <span className={styles.rank}>{index + 1}º</span>
                <span className={styles.imgage}><img src={`/Personagens/${item.avatar}/${item.avatar}Perfil.png`} alt="Avatar" className="w-8 h-8 rounded-full border-2 border-[var(--text-title)] -mb-[5px]" /></span>
                <span className={styles.name}>{item.id}</span>
                <span className={styles.score}>{item.score} PL</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default RankingPage;
