import React from 'react';
import styles from './SearchEngine.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerTop}>
          <div className={styles.logoWrapper}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1d8c90f341b366bbc3680973d797559ce6e52080d59b06317d863de636ee4b7?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31" alt="Search Engine Logo" className={styles.logo} />
            <div className={styles.searchBox}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/313c9ffb7c3407e35e54bb306b9ed319dc6607f14ec90c0e54f631674f9123c6?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31" alt="Search Icon" className={styles.searchIcon} />
            </div>
          </div>
          <nav className={styles.menuWrapper}>
            <div className={styles.menuItem} />
            <div className={styles.menuItem} />
            <div className={styles.menuItem} />
          </nav>
        </div>
        <nav className={styles.navMenu}>
          <div className={styles.navItem}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b22aa989ad7e78c080340b82ce8c8542626446e5ba071d670a85914ecfc55efd?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31" alt="" className={styles.navIcon} />
            <span>Web</span>
          </div>
          <div className={styles.navItem}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a192c2558c69c6830adf4355c5204a6e4c30af936931c2bfa95be7dbeb5a348?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31" alt="" className={styles.navIcon} />
            <span>Images</span>
          </div>
          <div className={styles.navItem}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6022ee6a9ce9e498593650e123b7d23d8aba0ea471c9f412a3d2fc1d31bf8d73?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31" alt="" className={styles.navIcon} />
            <span>Videos</span>
          </div>
        </nav>
      </div>
      <div className={styles.divider} />
    </header>
  );
};

export default Header;