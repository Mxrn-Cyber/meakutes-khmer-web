// src/components/Footer.js
import styles from "./Footer.module.css"; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <h3>Links</h3>
          <ul>
            <li>Discover</li>
            <li>Special Deals</li>
            <li>Community</li>
          </ul>
        </div>
        <div className={styles.services}>
          <h3>Services</h3>
          <ul>
            <li>Blog & Articles</li>
            <li>Term and Condition</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <p>Address: J.Codelaros No.205A, Kediri, Pare AG17</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: myanguperdana@gmail.com</p>
          <p>Maps: Kediri, East Java</p>
        </div>
      </div>
      <div className={styles.credit}>
        <p>Seng Vannak</p>
        <div className={styles.socialIcons}>
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
