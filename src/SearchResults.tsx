import React from 'react';
import styles from './SearchEngine.module.css';

const SearchResults: React.FC = () => {
  return (
    <section className={styles.searchResults}>
      <article className={styles.resultCard}>
        <h2 className={styles.resultTitle}>SearX - A Privacy-respecting Metasearch engine</h2>
        <a href="https://searx.me" className={styles.resultLink}>https://searx.me</a>
        <p className={styles.resultDescription}>
          Searx. Privacy-respecting metasearch engine. Version 1.0.0 is available. Update your instances. Public instances. List of public searx instances.
        </p>
      </article>
      <div className={styles.placeholderCard} />
      <div className={styles.placeholderCard} />
    </section>
  );
};

export default SearchResults;