import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DestinationCard from "../components/DestinationCard";
import TestimonialCard from "../components/TestimonialCard";
import styles from "../styles/pages/Discover.module.css";

export default function Discover() {
  const destinations = [
    { image: "/assets/angkor-wat.jpg", title: "Angkor Wat, Cambodia" },
    { image: "/assets/paris.jpg", title: "Paris, France" },
    { image: "/assets/maldives.jpg", title: "Maldives" },
  ];

  const testimonials = [
    { name: "Sophia Lee", feedback: "Breathtaking experience!" },
    { name: "Daniel Wong", feedback: "Loved every moment!" },
  ];

  return (
    <div>
      <Head>
        <title>Discover</title>
      </Head>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <h2 className={styles.centerText}>Discover your love</h2>
          <p className={styles.centerText}>
            Find the most beautiful places to explore.
          </p>
        </section>

        {/* Destinations */}
        <section className={styles.destinations}>
          <div className={styles.destinationGrid}>
            {destinations.map((dest, index) => (
              <DestinationCard
                key={index}
                image={dest.image}
                title={dest.title}
              />
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonials}>
          <h2 className={styles.centerText}>
            What’s your most favorite place?
          </h2>
          <div className={styles.testimonialGrid}>
            {testimonials.map((test, index) => (
              <TestimonialCard
                key={index}
                name={test.name}
                feedback={test.feedback}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
