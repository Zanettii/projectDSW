"use client";

import React, { useState } from "react";
import styles from "./ranking.module.css";
import { rankings as rankingsData } from "./rankingsData";

type RankingCategory = "Páginas" | "Livros" | "Sequências" | "Missões";
type RankingType = "amigos" | "geral";
type user = { id: 'verbix', name: 'verbix' };

interface RankingItem {
  id: string;
  name: string;
  score: number;
}

interface Rankings {
  [key: string]: {
    amigos: RankingItem[];
    geral: RankingItem[];
  };
}

const RankingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<RankingCategory>("Páginas");
  const [selectedRankingType, setSelectedRankingType] = useState<RankingType>("amigos");

  const user: user = { id: 'verbix', name: 'verbix' };

  const handleCategoryChange = (category: RankingCategory) => {
    setSelectedCategory(category);
  };

  const handleRankingTypeChange = (type: RankingType) => {
    setSelectedRankingType(type);
  };

  const sortedRankings = rankingsData[selectedCategory][selectedRankingType]
    .sort((a, b) => b.score - a.score)
    .slice(0, 20); // Limita o ranking a 20 pessoas

  return (
    <div className={styles.container}>
      {/* Navegação principal */}
      <nav className={styles.navigation}>
        {/* Sessão das Categorias (Lado esquerdo) */}
        <section className={styles.header}>
          {Object.keys(rankingsData).map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.selectedCategory : ""
              }`}
              onClick={() => handleCategoryChange(category as RankingCategory)}
            >
              {category}
            </button>
          ))}
        </section>

        {/* Sessão do Tipo de Ranking (Lado direito) */}
        <section className={styles.rankingTypeSelector}>
          <button
            className={`${styles.rankingTypeButton} ${
              selectedRankingType === "amigos" ? styles.selectedRankingType : ""
            }`}
            onClick={() => handleRankingTypeChange("amigos")}
          >
            Amigos
          </button>
          <button
            className={`${styles.rankingTypeButton} ${
              selectedRankingType === "geral" ? styles.selectedRankingType : ""
            }`}
            onClick={() => handleRankingTypeChange("geral")}
          >
            Geral
          </button>
        </section>
      </nav>

      {/* Sessão dos Rankings */}
      <div className={styles.rankingsContainer}>
        {/* Podio Fixo */}
        <div className={styles.fixedPodio}>
          <div className="podio">
            {/* Adicione aqui conteúdo fixo como rankings gerais ou destaques */}
          </div>
          <div className="user-posicao">
            {/* Adicione aqui a posição do usuário */}
          </div>
        </div>

        {/* Rankings Roláveis */}
        <section className={styles.rankingsScrollable}>
          <div className={styles.rankings}>
            {sortedRankings.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.rankingItem} ${index < 3 ? styles.topRanking : ""} ${
                  item.id === user.id ? styles.highlightUser : ""
                }`}
              >
                <span className={styles.rank}>{index + 1}</span>
                <span className={styles.name}>{item.name}</span>
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
