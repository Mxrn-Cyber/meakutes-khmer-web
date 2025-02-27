import Link from "next/link";
import styles from "./Header.module.css"; // Create a CSS module for styling

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>MEAKUTES-KHMER</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/Home">Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/discover">Discover</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/popular">Popular</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* User Profile with Link to Login */}
        <Link href="/login">
          <div className={styles.userProfile}>
            <img
              src="/assets/myprofile.jpg" // Replace with actual user avatar or profile picture
              alt="User Profile"
              className={styles.userAvatar}
            />
            <span className={styles.userName}>Username</span>{" "}
            {/* Dynamically replace "Username" */}
          </div>
        </Link>

        <div className={styles.search}>
          <input
            type="text"
            placeholder="City Destination"
            className={styles.searchInput}
          />
          <select className={styles.typeSelect}>
            <option value="">Select Province</option>
            <option>Phnom Penh</option>
            <option>Banteay Meanchey</option>
            <option>Battambang</option>
            <option>Kampong Cham</option>
            <option>Kampong Chhnang</option>
            <option>Kampong Speu</option>
            <option>Kampong Thom</option>
            <option>Kampot</option>
            <option>Kandal</option>
            <option>Koh Kong</option>
            <option>Kratié</option>
            <option>Mondulkiri</option>
            <option>Oddar Meanchey</option>
            <option>Pailin</option>
            <option>Preah Sihanouk</option>
            <option>Preah Vihear</option>
            <option>Pursat</option>
            <option>Prey Veng</option>
            <option>Ratanakiri</option>
            <option>Siem Reap</option>
            <option>Stung Treng</option>
            <option>Svay Rieng</option>
            <option>Takeo</option>
            <option>Tboung Khmum</option>
          </select>
          <button className={styles.findButton}>Find Trip Now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
