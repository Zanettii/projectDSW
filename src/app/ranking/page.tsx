// projectDSW/src/app/ranking/page.tsx
"use client";

import React, { useState } from 'react';
import styles from './ranking.module.css';
import { rankings as rankingsData } from './rankingsData';

type RankingCategory = 'Páginas' | 'Livros' | 'Sequências' | 'Missões';
type RankingType = 'amigos' | 'geral';

interface RankingItem {
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
  const [selectedCategory, setSelectedCategory] = useState<RankingCategory>('Páginas');
  const [selectedRankingType, setSelectedRankingType] = useState<RankingType>('amigos');

  const handleCategoryChange = (category: RankingCategory) => {
    setSelectedCategory(category);
  };

  const handleRankingTypeChange = (type: RankingType) => {
    setSelectedRankingType(type);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(rankingsData).map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.selectedCategory : ''
            }`}
            onClick={() => handleCategoryChange(category as RankingCategory)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className={styles.rankingTypeSelector}>
        <button
          className={`${styles.rankingTypeButton} ${
            selectedRankingType === 'amigos' ? styles.selectedRankingType : ''
          }`}
          onClick={() => handleRankingTypeChange('amigos')}
        >
          Amigos
        </button>
        <button
          className={`${styles.rankingTypeButton} ${
            selectedRankingType === 'geral' ? styles.selectedRankingType : ''
          }`}
          onClick={() => handleRankingTypeChange('geral')}
        >
          Geral
        </button>
      </div>
      <div className={styles.rankingsContainer}>
        <div className={styles.rankings}>
          {rankingsData[selectedCategory][selectedRankingType].map((item, index) => (
            <div
              key={item.name}
              className={`${styles.rankingItem} ${
                index < 3 ? styles.topRanking : ''
              }`}
            >
              <span className={styles.rank}>{index + 1}</span>
              <span className={styles.name}>{item.name}</span>
              <span className={styles.score}>{item.score} PL</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankingPage;