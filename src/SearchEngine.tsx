import React from 'react';
import styles from './SearchEngine.module.css';
import NavigationMenu from './NavigationMenu.tsx';
import SearchResults from './SearchResults.tsx';
import InfoCard from './InfoCard.tsx';

const SearchEngine: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerTop}>
            <div className={styles.logoWrapper}>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1d8c90f341b366bbc3680973d797559ce6e52080d59b06317d863de636ee4b7?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31" alt="Search Engine Logo" className={styles.logo} />
              <div className={styles.searchBox}>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/313c9ffb7c3407e35e54bb306b9ed319dc6607f14ec90c0e54f631674f9123c6?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31" alt="Search Icon" className={styles.searchIcon} />
              </div>
            </div>
            <nav className={styles.menuWrapper}>
              <div className={styles.menuItem} />
              <div className={styles.menuItem} />
              <div className={styles.menuItem} />
            </nav>
          </div>
          <NavigationMenu />
        </div>
        <div className={styles.divider} />
      </header>
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftColumn}>
            <SearchResults />
          </div>
          <div className={styles.rightColumn}>
            <InfoCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchEngine;