import React from 'react';
import styles from './SearchEngine.module.css';

interface LinkItem {
  icon: string;
  text: string;
}

const linkItems: LinkItem[] = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/03ea8333c24c408a9f792a02df72fc728f779daf28eb0a68335fb96f782745fe?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31", text: "Official Page" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b62e5184d972224b21ba4d98b91ea6f00af89cfe706674577128a98616da59e?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31", text: "Gitlab" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/33034b66ceafcf84598a15f114a9f02ae12dd0eaddef327c106c36bfddae20e0?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31", text: "Wikipedia" }
];

const InfoCard: React.FC = () => {
  return (
    <aside className={styles.infoCard}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/430bc7971d713718b7de8afda14afb50d95cd3bdd8e3e5d4eaac2b4347ceb41d?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31" alt="SearX Logo" className={styles.infoImage} />
      <p className={styles.infoDescription}>
        Searx is a free and open-source metasearch engine, available under the GNU Affero General Public License version 3, with the aim of protecting the privacy of its users. To this end, Searx does not share users' IP addresses or search history with the search engines from which it gathers results.
      </p>
      <p className={styles.infoDeveloper}>
        Developer: <span style={{ fontWeight: 400 }}>Adam Tauber</span>
      </p>
      <p className={styles.infoLanguages}>
        Programming Languages: <span style={{ fontWeight: 400 }}>Python, Html, etc.</span>
      </p>
      <p className={styles.infoLicense}>
        License: <span style={{ fontWeight: 400 }}>AGPL-3.0</span>
      </p>
      <div className={styles.infoLinks}>
        {linkItems.map((item, index) => (
          <div key={index} className={styles.linkItem}>
            <img loading="lazy" src={item.icon} alt="" className={styles.linkIcon} />
            <span className={styles.linkText}>{item.text}</span>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default InfoCard;