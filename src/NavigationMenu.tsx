import React from 'react';
import styles from './SearchEngine.module.css';

interface NavItem {
  icon: string;
  text: string;
}

const navItems: NavItem[] = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b22aa989ad7e78c080340b82ce8c8542626446e5ba071d670a85914ecfc55efd?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31", text: "Web" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a192c2558c69c6830adf4355c5204a6e4c30af936931c2bfa95be7dbeb5a348?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31", text: "Images" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6022ee6a9ce9e498593650e123b7d23d8aba0ea471c9f412a3d2fc1d31bf8d73?placeholderIfAbsent=true&apiKey=2ba0fb7325a84f4fa5c4b1eda3d92e31", text: "Videos" }
];

const NavigationMenu: React.FC = () => {
  return (
    <nav className={styles.navigationMenu}>
      {navItems.map((item, index) => (
        <div key={index} className={styles.navItem}>
          <img loading="lazy" src={item.icon} alt="" className={styles.navIcon} />
          <span>{item.text}</span>
        </div>
      ))}
    </nav>
  );
};

export default NavigationMenu;