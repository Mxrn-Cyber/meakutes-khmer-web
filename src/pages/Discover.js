import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DestinationCard from "../components/DestinationCard"; // Ensure this is your card component
import styles from "../styles/Discover.module.css"; // Create a CSS module for styles

const destinations = [
  { image: "/meakutea-khmer/assets/SR.png", title: "Siem Reap" },
  { image: "/meakutea-khmer/assets/destination2.jpg", title: "Phnom Penh" },
];

export default function Discover() {
  return (
    <div>
      <Head>
        <title>Discover</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.feature}>
          <h2>Our Feature</h2>
          <p>All Cambodia</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>

        <section className={styles.popularPlaces}>
          <h2>Top Popular Places</h2>
          <div className={styles.cardContainer}>
            {destinations.map((dest, index) => (
              <DestinationCard
                key={index}
                image={dest.image}
                title={dest.title}
              />
            ))}
          </div>
        </section>

        <section className={styles.aboutUs}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            consequat.
          </p>
          <p>Map included and Cambodia custom tours available.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
